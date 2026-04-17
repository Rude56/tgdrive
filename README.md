[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Rude56/tgdrive)
## 部署步骤

### 前置准备（在 Cloudflare Dashboard 完成）

1. 创建 D1 数据库，执行 `schema.sql` 建表
2. 创建 KV 命名空间
3. 创建 Telegram Bot，获取 Token 和 Chat ID

### 一键部署

点击上方按钮，按提示完成授权后，在 Cloudflare Dashboard 中配置以下环境变量：

| 变量名 | 说明 | 必填 |
|--------|------|------|
| `TG_TOKEN` | Telegram Bot Token | ✅ |
| `TG_CHAT_ID` | Telegram 频道/群组 ID | ✅ |
| `ADMIN_PASSWORD` | 管理员密码 | ✅ |
| `BG_URL` | 背景图片 URL | ❌ |
| `DARK_BG_URL` | 深色模式背景图 URL | ❌ |
| `LOGO_URL` | Logo 图片 URL | ❌ |

### 数据库初始化

在 Cloudflare Dashboard → D1 → 你的数据库 → Console 中执行：

```sql
CREATE TABLE IF NOT EXISTS files (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  file_id TEXT NOT NULL,
  size INTEGER DEFAULT 0,
  mime_type TEXT,
  password TEXT NOT NULL,
  message_id INTEGER,
  description TEXT,
  download_count INTEGER DEFAULT 0,
  expires_at TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```
