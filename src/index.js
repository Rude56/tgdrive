import { getHTML } from './html.js';
import { checkRateLimit } from './utils.js';
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const bg_url = env.BG_URL || 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=2070';
    const dark_bg_url = env.DARK_BG_URL || bg_url; 
    const logo_url = env.LOGO_URL || '';
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';

    if (path === "/api/webhook" && request.method === "POST") {
      const update = await request.json();
      if (update.message) {
        const msg = update.message;
        if (String(msg.from.id) !== String(env.TG_CHAT_ID)) return new Response("OK");
        let mediaObj = null;
        let fileName = null;
        let mimeType = 'application/octet-stream';

        if (msg.document) {
          mediaObj = msg.document;
          fileName = mediaObj.file_name || 'file';
          mimeType = mediaObj.mime_type || mimeType;
        } else if (msg.video) {
          mediaObj = msg.video;
          fileName = mediaObj.file_name || ('video_' + msg.message_id + '.mp4');
          mimeType = mediaObj.mime_type || 'video/mp4';
        } else if (msg.audio) {
          mediaObj = msg.audio;
          fileName = mediaObj.file_name || mediaObj.title || ('audio_' + msg.message_id + '.mp3');
          mimeType = mediaObj.mime_type || 'audio/mpeg';
        } else if (msg.voice) {
          mediaObj = msg.voice;
          fileName = 'voice_' + msg.message_id + '.ogg';
          mimeType = mediaObj.mime_type || 'audio/ogg';
        } else if (msg.photo) {
          mediaObj = msg.photo[msg.photo.length - 1];
          fileName = 'photo_' + msg.message_id + '.jpg';
          mimeType = 'image/jpeg';
        }

        if (mediaObj) {
          const caption = msg.caption || "";
          const lines = caption.split('\n');
          const password = lines[0]?.trim();
          const description = lines.slice(1).join('\n').trim();
          if (!password) return new Response("OK");

          await env.DB.prepare(
            "INSERT INTO files (name, file_id, size, mime_type, password, message_id, description, download_count, expires_at) VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)"
          ).bind(fileName, mediaObj.file_id, mediaObj.file_size || 0, mimeType, password, msg.message_id, description, null).run();
        }
      }
      return new Response("OK");
    }

    if (path === "/" || path.startsWith("/s/")) {
      let prefillCode = "";
      if (path.startsWith("/s/")) {
        prefillCode = decodeURIComponent(path.split("/")[2] || "");
      }
      return new Response(getHTML(bg_url, prefillCode, logo_url, dark_bg_url), { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }

    if (path === "/api/check-duplicate" && request.method === "POST") {
      const auth = request.headers.get("Authorization");
      const { filename, password } = await request.json();
      const warnings = [];

      if (filename) {
        const existingFile = await env.DB.prepare(
          "SELECT id, name, password FROM files WHERE name = ? LIMIT 1"
        ).bind(filename).first();
        if (existingFile) {
          warnings.push({
            type: 'filename',
            message: `文件名 "${filename}" 已存在(提取码: ${existingFile.password})`,
            existing: existingFile
          });
        }
      }

      if (password) {
        const existingPw = await env.DB.prepare(
          "SELECT id, name, password FROM files WHERE password = ? LIMIT 1"
        ).bind(password).first();
        if (existingPw) {
          warnings.push({
            type: 'password',
            message: `提取码 "${password}" 已被文件 "${existingPw.name}" 使用，建议更换提取码`,
            existing: existingPw
          });
        }
      }

      return Response.json({ hasDuplicate: warnings.length > 0, warnings });
    }

    if (path === "/api/list" && request.method === "GET") {
      const rateKey = `rate:list:${clientIP}`;
      const rateLimitResult = await checkRateLimit(env, rateKey, 20, 60);
      if (!rateLimitResult.allowed) {
        return Response.json({ error: "请求过于频繁，请稍后再试" }, { status: 429 });
      }

      const sharePw = url.searchParams.get("share_pw");
      const adminPw = request.headers.get("Authorization");
      let results;

      if (adminPw && adminPw === env.ADMIN_PASSWORD) {
        const query = await env.DB.prepare("SELECT * FROM files ORDER BY created_at DESC").all();
        results = query.results;
      } else if (sharePw) {
        const errorKey = `errors:${clientIP}`;
        const errors = await env.KV?.get(errorKey) || 0;
        if (parseInt(errors) > 10) {
          return Response.json({ error: "错误次数过多，请10分钟后再试" }, { status: 429 });
        }

        const query = await env.DB.prepare(
          "SELECT id, name, size, description, created_at, mime_type, download_count, expires_at FROM files WHERE password = ?"
        ).bind(sharePw).all();

        if (query.results.length === 0) {
          await env.KV?.put(errorKey, String(parseInt(errors) + 1), { expirationTtl: 600 });
        }

        results = query.results.filter(f => !f.expires_at || new Date(f.expires_at) > new Date());
      } else {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
      }
      return Response.json(results);
    }

    if (path === "/api/upload" && request.method === "POST") {
      const auth = request.headers.get("Authorization");
      if (auth !== env.ADMIN_PASSWORD) return Response.json({ error: "Unauthorized" }, { status: 401 });

      const formData = await request.formData();
      const file = formData.get("file");
      const filePw = formData.get("file_password");
      const desc = formData.get("description") || "";
      const expiryHours = formData.get("expiry_hours");

      const MAX_UPLOAD_SIZE = 50 * 1024 * 1024;
      if (file.size > MAX_UPLOAD_SIZE) {
        return Response.json({ error: `文件大小超过限制（最大50MB）` }, { status: 413 });
      }

      let expiresAt = null;
      if (expiryHours && parseInt(expiryHours) > 0) {
        const expiry = new Date();
        expiry.setMinutes(expiry.getMinutes() + parseInt(expiryHours));
        expiresAt = expiry.toISOString();
      }

      const tgFormData = new FormData();
      tgFormData.append("chat_id", env.TG_CHAT_ID);
      tgFormData.append("document", file);
      tgFormData.append("caption", `${filePw}\n${desc}`);

      const tgRes = await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/sendDocument`, { method: "POST", body: tgFormData });
      const tgData = await tgRes.json();
      if (!tgData.ok) return Response.json({ error: tgData.description }, { status: 500 });

      const result = tgData.result;
      const mediaObj = result.document || result.video || result.audio || result.voice ||
        (result.photo ? result.photo[result.photo.length - 1] : null);
      if (!mediaObj) return Response.json({ error: "无法获取文件信息" }, { status: 500 });

      await env.DB.prepare(
        "INSERT INTO files (name, file_id, size, mime_type, password, message_id, description, download_count, expires_at) VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)"
      ).bind(file.name, mediaObj.file_id, file.size, file.type, filePw, result.message_id, desc, expiresAt).run();

      return Response.json({ success: true });
    }

    if (path === "/api/user-upload" && request.method === "POST") {
      const rateKey = `rate:upload:${clientIP}`;
      const rateLimitResult = await checkRateLimit(env, rateKey, 10, 3600);
      if (!rateLimitResult.allowed) {
        return Response.json({ error: "上传过于频繁，请1小时后再试" }, { status: 429 });
      }

      const formData = await request.formData();
      const file = formData.get("file");
      const filePw = formData.get("file_password");
      const desc = formData.get("description") || "";
      const expiryHours = formData.get("expiry_hours");

      if (!filePw) return Response.json({ error: "请设置提取码" }, { status: 400 });

      const MAX_USER_UPLOAD_SIZE = 20 * 1024 * 1024;
      if (file.size > MAX_USER_UPLOAD_SIZE) {
        return Response.json({ error: `文件大小超过限制（最大20MB）` }, { status: 413 });
      }

      if (!expiryHours || parseInt(expiryHours) <= 0) {
        return Response.json({ error: "用户上传必须设置有效期" }, { status: 400 });
      }

      const expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() + parseInt(expiryHours));
      const expiresAt = expiry.toISOString();

      const tgFormData = new FormData();
      tgFormData.append("chat_id", env.TG_CHAT_ID);
      tgFormData.append("document", file);
      tgFormData.append("caption", `${filePw}\n[用户上传]\n${desc}`);

      const tgRes = await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/sendDocument`, { method: "POST", body: tgFormData });
      const tgData = await tgRes.json();
      if (!tgData.ok) return Response.json({ error: tgData.description }, { status: 500 });

      const result = tgData.result;
      const mediaObj = result.document || result.video || result.audio || result.voice ||
        (result.photo ? result.photo[result.photo.length - 1] : null);
      if (!mediaObj) return Response.json({ error: "无法获取文件信息" }, { status: 500 });

      await env.DB.prepare(
        "INSERT INTO files (name, file_id, size, mime_type, password, message_id, description, download_count, expires_at) VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)"
      ).bind(file.name, mediaObj.file_id, file.size, file.type, filePw, result.message_id, desc, expiresAt).run();

      return Response.json({ success: true });
    }

    if (path.startsWith("/api/preview/")) {
      const id = path.split("/").pop();
      const userPw = url.searchParams.get("pw");
      const adminPw = url.searchParams.get("admin_pw");

      const file = await env.DB.prepare("SELECT * FROM files WHERE id = ?").bind(id).first();
      if (!file || (adminPw !== env.ADMIN_PASSWORD && file.password !== userPw)) {
        return new Response("Access Denied", { status: 403 });
      }

      if (file.expires_at && new Date(file.expires_at) < new Date()) {
        return new Response("文件已过期", { status: 410 });
      }

      const getFileRes = await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/getFile?file_id=${file.file_id}`);
      const getFileData = await getFileRes.json();
      const res = await fetch(`https://api.telegram.org/file/bot${env.TG_TOKEN}/${getFileData.result.file_path}`);

      return new Response(res.body, {
        headers: {
          "Content-Type": file.mime_type,
          "Content-Disposition": "inline"
        }
      });
    }

    if (path.startsWith("/api/download/")) {
      const id = path.split("/").pop();
      const userPw = url.searchParams.get("pw");
      const adminPw = url.searchParams.get("admin_pw");

      const file = await env.DB.prepare("SELECT * FROM files WHERE id = ?").bind(id).first();
      if (!file || (adminPw !== env.ADMIN_PASSWORD && file.password !== userPw)) {
        return new Response("Access Denied", { status: 403 });
      }

      if (file.expires_at && new Date(file.expires_at) < new Date()) {
        return new Response("文件已过期", { status: 410 });
      }

      const MAX_DOWNLOAD_SIZE = 20 * 1024 * 1024;
      if (file.size > MAX_DOWNLOAD_SIZE) {
        return new Response("文件过大，无法下载（最大20MB）", { status: 413 });
      }

      await env.DB.prepare("UPDATE files SET download_count = download_count + 1 WHERE id = ?").bind(id).run();

      const getFileRes = await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/getFile?file_id=${file.file_id}`);
      const getFileData = await getFileRes.json();
      const res = await fetch(`https://api.telegram.org/file/bot${env.TG_TOKEN}/${getFileData.result.file_path}`);
      const newHeaders = new Headers(res.headers);
      newHeaders.set("Content-Disposition", `attachment; filename*=UTF-8''${encodeURIComponent(file.name)}`);
      return new Response(res.body, { headers: newHeaders });
    }

    if (path === "/api/batch-delete" && request.method === "POST") {
      const auth = request.headers.get("Authorization");
      if (auth !== env.ADMIN_PASSWORD) return Response.json({ error: "Unauthorized" }, { status: 401 });

      const { ids } = await request.json();
      for (const id of ids) {
        const file = await env.DB.prepare("SELECT * FROM files WHERE id = ?").bind(id).first();
        if (file) {
          await env.DB.prepare("DELETE FROM files WHERE id = ?").bind(id).run();
          if (file.message_id) {
            await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/deleteMessage`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ chat_id: env.TG_CHAT_ID, message_id: file.message_id })
            });
          }
        }
      }
      return Response.json({ success: true });
    }

    if (path.startsWith("/api/delete/")) {
      const auth = request.headers.get("Authorization");
      if (auth !== env.ADMIN_PASSWORD) return Response.json({ error: "Unauthorized" }, { status: 401 });
      const id = path.split("/").pop();
      const file = await env.DB.prepare("SELECT * FROM files WHERE id = ?").bind(id).first();
      if (file) {
        await env.DB.prepare("DELETE FROM files WHERE id = ?").bind(id).run();
        if (file.message_id) {
          await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/deleteMessage`, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: env.TG_CHAT_ID, message_id: file.message_id })
          });
        }
      }
      return Response.json({ success: true });
    }

    return new Response("Not Found", { status: 404 });
  },
  async scheduled(event, env, ctx) {
    await env.DB.prepare(
      "DELETE FROM files WHERE expires_at IS NOT NULL AND expires_at < ?"
    ).bind(new Date().toISOString()).run();
  }
};
