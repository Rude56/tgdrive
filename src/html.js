export function getHTML(bg, prefill, logo, darkBg) {
  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>遥遥领先盘</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
${logo ? `<link rel="icon" href="${logo}" type="image/png">` : ''}
<link rel="icon" href="${logo || 'https://img.cdn1.vip/i/69e112e634c6e_1776358118.png'}" type="image/png">
<style>
:root {
  --baidu-blue: #2468f2;
  --baidu-blue-hover: #1a5dd4;
  --baidu-blue-light: rgba(36, 104, 242, 0.1);
  --text-primary: #333;
  --text-secondary: #666;
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --border-color: #e5e5e5;
  --shadow: rgba(0, 0, 0, 0.1);
  --bg-glass: rgba(255, 255, 255, 0.80);
  --bg-glass-input: rgba(245, 245, 245, 0.80);
  --bg-glass-card: rgba(245, 245, 245, 0.70);
  --bg-glass-modal: rgba(255, 255, 255, 0.90);
  --bg-glass-inner: rgba(255, 255, 255, 0.85);
  --desc-bg: #f6ffed;
  --desc-border: #b7eb8f;
  --desc-left: #52c41a;
  --desc-text: #333;
  --warn-bg: #fff2e8;
  --warn-border: #ffbb96;
  --warn-left: #ff7a45;
  --warn-text: #d4380d;
}
@media (prefers-color-scheme: dark) {
  :root {
    --baidu-blue: #3478f6;
    --baidu-blue-hover: #4a88f7;
    --baidu-blue-light: rgba(52, 120, 246, 0.15);
    --text-primary: #e5e5e5;
    --text-secondary: #999;
    --bg-primary: #1a1a1a;
    --bg-secondary: #2a2a2a;
    --border-color: #3a3a3a;
    --shadow: rgba(0, 0, 0, 0.3);
    --bg-glass: rgba(26, 26, 26, 0.80);
    --bg-glass-input: rgba(42, 42, 42, 0.82);
    --bg-glass-card: rgba(42, 42, 42, 0.72);
    --bg-glass-modal: rgba(26, 26, 26, 0.92);
    --bg-glass-inner: rgba(42, 42, 42, 0.88);
    --desc-bg: rgba(82, 196, 26, 0.10);
    --desc-border: rgba(82, 196, 26, 0.30);
    --desc-left: #52c41a;
    --desc-text: #b7eb8f;
    --warn-bg: rgba(255, 122, 69, 0.10);
    --warn-border: rgba(255, 122, 69, 0.30);
    --warn-left: #ff7a45;
    --warn-text: #ffbb96;
  }
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: url('${bg}') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  position: relative;
  overflow-x: hidden;
}
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 0;
  pointer-events: none;
  transition: background 0.3s;
}
@media (prefers-color-scheme: dark) {
  body {
    background-image: url('${darkBg}');
  }
  body::after { background: rgba(0, 0, 0, 0.50); }
}
.container { position: relative; z-index: 1; width: 100%; max-width: 720px; }
.glass {
  background: var(--bg-glass);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 8px 32px var(--shadow);
  overflow: hidden;
  margin-bottom: 20px;
}
.glass-input {
  background: var(--bg-glass-input);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 12px 16px;
  color: var(--text-primary);
  font-size: 14px;
  outline: none;
  transition: all 0.3s;
}
.glass-input::placeholder { color: var(--text-secondary); }
.glass-input:focus { border-color: var(--baidu-blue); box-shadow: 0 0 0 2px var(--baidu-blue-light); }
.btn-primary {
  background: var(--baidu-blue);
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-primary:hover { background: var(--baidu-blue-hover); }
.btn-glass {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-glass:hover { background: var(--bg-glass-input); border-color: var(--baidu-blue); }
.file-card {
  background: var(--bg-glass-card);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 12px;
  transition: all 0.3s;
}
.file-card:hover { box-shadow: 0 2px 8px var(--shadow); border-color: var(--baidu-blue); }
.icon-btn {
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
}
.icon-btn:hover { background: var(--baidu-blue-light); color: var(--baidu-blue); border-color: var(--baidu-blue); }
.drop-zone {
  background: var(--bg-glass-input);
  border: 2px dashed var(--border-color);
  border-radius: 10px;
  padding: 48px 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}
.drop-zone:hover, .drop-zone.drag-over { background: var(--baidu-blue-light); border-color: var(--baidu-blue); }
.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(6px);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal.active { display: flex; }
.modal-content {
  background: var(--bg-glass-modal);
  backdrop-filter: blur(32px) saturate(180%);
  -webkit-backdrop-filter: blur(32px) saturate(180%);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 20px 60px var(--shadow);
}
.alert-warning {
  background: rgba(255, 247, 230, 0.85);
  border: 1px solid #ffa940;
  border-left: 4px solid #fa8c16;
  border-radius: 10px;
  padding: 16px;
  margin-top: 16px;
  color: #333;
  backdrop-filter: blur(8px);
}
@media (prefers-color-scheme: dark) {
  .alert-warning { background: rgba(250,140,22,0.12); color: #ffa940; }
}
.progress-bar { height: 6px; background: var(--bg-glass-input); border-radius: 3px; overflow: hidden; margin: 12px 0; }
.progress-fill { height: 100%; background: var(--baidu-blue); border-radius: 3px; transition: width 0.3s ease; }
h1 { color: var(--text-primary); font-size: 24px; font-weight: 500; margin-bottom: 8px; }
.subtitle { color: var(--text-secondary); font-size: 14px; font-weight: 400; }
.empty-state { text-align: center; padding: 56px 24px; color: var(--text-secondary); }
textarea {
  width: 100%;
  background: var(--bg-glass-input);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 12px;
  color: var(--text-primary);
  font-size: 14px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  resize: vertical;
  min-height: 140px;
  line-height: 1.6;
}
select {
  appearance: none;
  background: var(--bg-glass-input) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E") no-repeat right 14px center;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 12px 44px 12px 16px;
  color: var(--text-primary);
  font-size: 14px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
}
select:focus { border-color: var(--baidu-blue); box-shadow: 0 0 0 2px var(--baidu-blue-light); }
select option { background: var(--bg-primary); color: var(--text-primary); padding: 10px; }
input[type="checkbox"] { width: 18px; height: 18px; cursor: pointer; accent-color: var(--baidu-blue); border-radius: 4px; }
@keyframes spin { to { transform: rotate(360deg); } }
.spinner { animation: spin 1s linear infinite; }
.baidu-logo { display: inline-block; font-size: 24px; font-weight: 700; color: var(--baidu-blue); margin-right: 8px; }
.tab-bar { display: flex; border-bottom: 1px solid var(--border-color); margin-bottom: 24px; }
.tab-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: -1px;
}
.tab-btn.active { color: var(--baidu-blue); border-bottom-color: var(--baidu-blue); }
.tab-btn:hover { color: var(--baidu-blue); }
.desc-box {
  background: var(--desc-bg);
  border: 1px solid var(--desc-border);
  border-left: 4px solid var(--desc-left);
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 16px;
  backdrop-filter: blur(8px);
}
.desc-box .desc-label { color: var(--desc-left); font-size: 11px; font-weight: 600; margin-bottom: 6px; }
.desc-box .desc-text { color: var(--desc-text); font-size: 13px; white-space: pre-wrap; word-break: break-all; line-height: 1.6; }
.size-warning {
  background: var(--warn-bg);
  border: 1px solid var(--warn-border);
  border-left: 4px solid var(--warn-left);
  border-radius: 10px;
  padding: 12px;
}
.size-warning p { color: var(--warn-text); font-size: 12px; line-height: 1.5; }
@media (max-width: 768px) {
  body { padding: 12px; }
  .container { max-width: 100%; }
  h1 { font-size: 20px; }
  .glass { border-radius: 12px; padding: 20px !important; }
  .modal-content { padding: 20px; border-radius: 12px; }
  .file-card { padding: 14px; }
  .icon-btn { width: 32px; height: 32px; }
}
</style>
</head>
<body>
<div class="container">

  <!-- 文件提取 -->
  <div class="glass" style="padding: 32px;">
    <div style="text-align: center; margin-bottom: 28px;">
  ${logo ? `<a href="/"><img src="${logo}" style="height:80px; margin-bottom:12px; display:block; margin-left:auto; margin-right:auto; cursor:pointer;" alt="logo"></a>` : ''}
  <h1><a href="/" style="text-decoration:none;"><span class="baidu-logo">遥遥领先盘</span></a></h1>
  <p class="subtitle">请输入提取码查看文件</p>
</div>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
      <input type="text" id="sharePw" value="${prefill}" placeholder="请输入提取码" class="glass-input" style="flex: 1; min-width: 200px;">
      <button onclick="searchFiles()" class="btn-primary">
        <i class="fa-solid fa-key" style="margin-right: 6px;"></i>提取文件
      </button>
    </div>
    <input type="text" id="fileSearch" placeholder="搜索文件名或备注" onkeyup="filterFiles()" class="glass-input" style="width: 100%;">
    <div id="fileList" style="margin-top: 24px;"></div>
  </div>

  <!-- 用户上传面板 -->
  <div id="userUploadPanel" style="display: block;">
    <div class="glass" style="padding: 28px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
        <h2 style="color: var(--text-primary); font-size: 18px; font-weight: 500;">上传文件</h2>
      </div>
      <div id="userDropZone" class="drop-zone">
        <i class="fa-solid fa-cloud-upload-alt" style="font-size: 48px; color: var(--text-secondary); margin-bottom: 16px; display: block;"></i>
        <p style="color: var(--text-primary); font-weight: 500; margin-bottom: 8px; font-size: 15px;">点击或拖拽文件到此处上传</p>
        <p style="color: var(--text-secondary); font-size: 13px;">支持批量上传，单文件最大20MB</p>
        <input type="file" id="userFileInput" style="display: none;" multiple>
      </div>
      <div id="userSelectedFiles" style="display: none; margin-top: 16px; background: var(--bg-glass-card); backdrop-filter: blur(12px); border: 1px solid var(--border-color); border-radius: 10px; overflow: hidden;">
        <div style="padding: 12px 16px; background: var(--bg-glass-inner); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
          <span style="color: var(--text-primary); font-weight: 500; font-size: 14px;">待上传文件</span>
          <button onclick="clearUserFiles()" style="background: none; border: none; color: #ff4d4f; cursor: pointer; font-size: 13px; font-weight: 500;">清空</button>
        </div>
        <div id="userSelectedFilesList" style="padding: 16px; max-height: 260px; overflow-y: auto;"></div>
      </div>
      <div id="userProgressContainer" style="display: none; margin-top: 16px; background: var(--bg-glass-card); border: 1px solid var(--border-color); border-radius: 10px; padding: 16px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span id="userUploadingFileName" style="color: var(--text-primary); font-size: 14px; font-weight: 500;"></span>
          <span id="userProgressText" style="color: var(--baidu-blue); font-weight: 600; font-size: 14px;">0%</span>
        </div>
        <div class="progress-bar"><div id="userProgressBar" class="progress-fill" style="width: 0%"></div></div>
        <p id="userUploadStatus" style="color: var(--text-secondary); font-size: 12px; margin-top: 8px;"></p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-top: 20px;">
        <input type="text" id="userFilePw" placeholder="设置提取码(必填)" onblur="checkUserDuplicate()" class="glass-input">
        <select id="userExpirySelect" class="glass-input">
  <option value="10">10分钟后过期</option>
  <option value="60" selected>1小时后过期</option>
  <option value="1440">1天后过期</option>
  <option value="10080">7天后过期</option>
  <option value="43200">30天后过期</option>
</select>
      </div>
      <div id="userDuplicateWarning" class="alert-warning" style="display: none;">
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <i class="fa-solid fa-exclamation-triangle" style="color: #fa8c16; font-size: 18px; margin-top: 2px;"></i>
          <div style="flex: 1;">
            <p style="font-weight: 600; font-size: 13px; margin-bottom: 8px;">检测到重复</p>
            <div id="userDuplicateWarningText" style="font-size: 13px; line-height: 1.5;"></div>
          </div>
        </div>
      </div>
      <input type="text" id="userDesc" placeholder="文件说明(可选)" class="glass-input" style="width: 100%; margin-top: 12px;">
      <div style="margin-top: 16px;">
        <button onclick="uploadUserFiles()" id="userUpBtn" class="btn-primary">
          <i class="fa-solid fa-upload" style="margin-right: 6px;"></i>开始上传
        </button>
      </div>
    </div>
  </div>

  <!-- 管理员入口 -->
  <div style="text-align: center;">
    <button id="adminEntrance" onclick="unlockAdmin()" class="btn-glass">
      <i class="fa-solid fa-lock" style="margin-right: 6px;"></i>管理员入口
    </button>
  </div>

  <!-- 管理员面板 -->
  <div id="adminPanel" style="display: none;">
    <div class="glass" style="padding: 28px; margin-top: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
        <h2 style="color: var(--text-primary); font-size: 18px; font-weight: 500;">管理控制台</h2>
        <button onclick="location.reload()" class="btn-glass" style="padding: 8px 16px; font-size: 13px;">退出</button>
      </div>
      <div id="dropZone" class="drop-zone">
        <i class="fa-solid fa-cloud-upload-alt" style="font-size: 48px; color: var(--text-secondary); margin-bottom: 16px; display: block;"></i>
        <p style="color: var(--text-primary); font-weight: 500; margin-bottom: 8px; font-size: 15px;">点击或拖拽文件到此处上传</p>
        <p style="color: var(--text-secondary); font-size: 13px;">支持批量上传，单文件最大50MB</p>
        <input type="file" id="fileInput" style="display: none;" multiple>
      </div>
      <div id="selectedFiles" style="display: none; margin-top: 16px; background: var(--bg-glass-card); border: 1px solid var(--border-color); border-radius: 10px; overflow: hidden;">
        <div style="padding: 12px 16px; background: var(--bg-glass-inner); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
          <span style="color: var(--text-primary); font-weight: 500; font-size: 14px;">待上传文件</span>
          <button onclick="clearSelectedFiles()" style="background: none; border: none; color: #ff4d4f; cursor: pointer; font-size: 13px; font-weight: 500;">清空</button>
        </div>
        <div id="selectedFilesList" style="padding: 16px; max-height: 260px; overflow-y: auto;"></div>
      </div>
      <div id="duplicateWarning" class="alert-warning" style="display: none;">
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <i class="fa-solid fa-exclamation-triangle" style="color: #fa8c16; font-size: 18px; margin-top: 2px;"></i>
          <div style="flex: 1;">
            <p style="font-weight: 600; font-size: 13px; margin-bottom: 8px;">检测到重复</p>
            <div id="duplicateWarningText" style="font-size: 13px; line-height: 1.5;"></div>
          </div>
        </div>
      </div>
      <div id="progressContainer" style="display: none; margin-top: 16px; background: var(--bg-glass-card); border: 1px solid var(--border-color); border-radius: 10px; padding: 16px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span id="uploadingFileName" style="color: var(--text-primary); font-size: 14px; font-weight: 500;"></span>
          <span id="progressText" style="color: var(--baidu-blue); font-weight: 600; font-size: 14px;">0%</span>
        </div>
        <div class="progress-bar"><div id="progressBar" class="progress-fill" style="width: 0%"></div></div>
        <p id="uploadStatus" style="color: var(--text-secondary); font-size: 12px; margin-top: 8px;"></p>
      </div>
      <input type="hidden" id="adminPw">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-top: 20px;">
        <input type="text" id="newFilePw" placeholder="设置提取码" onblur="checkDuplicate()" class="glass-input">
        <select id="expirySelect" class="glass-input">
  <option value="0" selected>永久有效</option>
  <option value="10">10分钟后过期</option>
  <option value="60">1小时后过期</option>
  <option value="1440">1天后过期</option>
  <option value="10080">7天后过期</option>
  <option value="43200">30天后过期</option>
</select>
      </div>
      <input type="text" id="newDesc" placeholder="文件说明(可选)" class="glass-input" style="width: 100%; margin-top: 12px;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; margin-top: 16px;">
        <button onclick="uploadFiles()" id="upBtn" class="btn-primary">
          <i class="fa-solid fa-upload" style="margin-right: 6px;"></i>开始上传
        </button>
        <button onclick="adminListAll()" class="btn-glass">
          <i class="fa-solid fa-sync-alt" style="margin-right: 6px;"></i>刷新列表
        </button>
        <button onclick="batchDelete()" id="batchDelBtn" class="btn-primary" style="display: none; background: #ff4d4f;">
          <i class="fa-solid fa-trash" style="margin-right: 6px;"></i>批量删除
        </button>
      </div>
      <input type="text" id="adminSearch" placeholder="搜索文件名或备注" onkeyup="filterAdminFiles()" class="glass-input" style="width: 100%; margin-top: 16px;">
      <div id="adminFileList" style="max-height: 500px; overflow-y: auto; margin-top: 16px;"></div>
    </div>
  </div>
</div>

<!-- 分享弹窗 -->
<div id="modal" class="modal">
  <div class="modal-content">
    <h3 style="color: var(--text-primary); font-size: 20px; font-weight: 500; margin-bottom: 20px; text-align: center;">
      <i class="fa-solid fa-share-nodes" style="margin-right: 8px; color: var(--baidu-blue);"></i>分享链接
    </h3>
    <textarea id="shareText" readonly></textarea>
    <div style="display: flex; gap: 12px; margin-top: 20px;">
      <button onclick="document.getElementById('modal').classList.remove('active')" class="btn-glass" style="flex: 1;">关闭</button>
      <button onclick="copyShareText()" class="btn-primary" style="flex: 2;">
        <i class="fa-solid fa-copy" style="margin-right: 6px;"></i>复制链接
      </button>
    </div>
  </div>
</div>

<!-- 详情弹窗 -->
<div id="detailModal" class="modal" onclick="closeDetailModal(event)">
  <div class="modal-content" onclick="event.stopPropagation()">
    <h3 style="color: var(--text-primary); font-size: 20px; font-weight: 500; margin-bottom: 20px;">
      <i class="fa-solid fa-info-circle" style="margin-right: 8px; color: var(--baidu-blue);"></i>文件详情
    </h3>
    <div id="detailContent"></div>
    <button onclick="closeDetailModal()" class="btn-glass" style="width: 100%; margin-top: 20px;">关闭</button>
  </div>
</div>

<!-- 预览弹窗 -->
<div id="previewModal" class="modal" onclick="closePreview(event)">
  <div class="modal-content" style="max-width: 95vw; max-height: 92vh; padding: 24px;" onclick="event.stopPropagation()">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h3 style="color: var(--text-primary); font-size: 18px; font-weight: 500;" id="previewTitle">
        <i class="fa-solid fa-eye" style="margin-right: 8px;"></i>文件预览
      </h3>
      <button onclick="closePreview()" style="background: rgba(255,255,255,0.15); backdrop-filter:blur(8px); border: 1px solid var(--border-color); border-radius: 10px; width: 36px; height: 36px; color: var(--text-secondary); font-size: 20px; cursor: pointer; line-height: 1; transition: all 0.3s;" onmouseover="this.style.background='var(--bg-glass-input)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">×</button>
    </div>
    <div id="previewContent" style="max-height: calc(92vh - 80px); overflow: auto;"></div>
  </div>
</div>

<script>
let allFiles = [];
function getFileIcon(filename, mimeType) {
  const ext = (filename || '').toLowerCase().split('.').pop();
  const map = {
    jpg: ['fa-file-image','#f5a623'], jpeg: ['fa-file-image','#f5a623'],
    png: ['fa-file-image','#f5a623'], gif: ['fa-file-image','#f5a623'],
    webp: ['fa-file-image','#f5a623'], svg: ['fa-file-image','#f5a623'],
    mp4: ['fa-file-video','#e040fb'], mov: ['fa-file-video','#e040fb'],
    avi: ['fa-file-video','#e040fb'], mkv: ['fa-file-video','#e040fb'],
    webm: ['fa-file-video','#e040fb'],
    mp3: ['fa-file-audio','#00bcd4'], wav: ['fa-file-audio','#00bcd4'],
    ogg: ['fa-file-audio','#00bcd4'], flac: ['fa-file-audio','#00bcd4'],
    pdf: ['fa-file-pdf','#f44336'],
    doc: ['fa-file-word','#2196f3'], docx: ['fa-file-word','#2196f3'],
    xls: ['fa-file-excel','#4caf50'], xlsx: ['fa-file-excel','#4caf50'],
    csv: ['fa-file-csv','#4caf50'],
    ppt: ['fa-file-powerpoint','#ff5722'], pptx: ['fa-file-powerpoint','#ff5722'],
    txt: ['fa-file-lines','#9e9e9e'], md: ['fa-file-lines','#9e9e9e'],
    js: ['fa-file-code','#ffeb3b'], ts: ['fa-file-code','#3178c6'],
    html: ['fa-file-code','#e34c26'], css: ['fa-file-code','#264de4'],
    py: ['fa-file-code','#3572a5'], json: ['fa-file-code','#ffa726'],
    zip: ['fa-file-zipper','#795548'], rar: ['fa-file-zipper','#795548'],
    gz: ['fa-file-zipper','#795548'], tar: ['fa-file-zipper','#795548'],
    '7z': ['fa-file-zipper','#795548'],
  };
  if (map[ext]) return map[ext];
  if (mimeType) {
    if (mimeType.startsWith('image/')) return ['fa-file-image','#f5a623'];
    if (mimeType.startsWith('video/')) return ['fa-file-video','#e040fb'];
    if (mimeType.startsWith('audio/')) return ['fa-file-audio','#00bcd4'];
    if (mimeType.startsWith('text/'))  return ['fa-file-lines','#9e9e9e'];
  }
  return ['fa-file','var(--baidu-blue)'];
}
let selectedFiles = new Set();
let pendingUploadFiles = [];
let userPendingFiles = [];
const MAX_UPLOAD_SIZE = 50 * 1024 * 1024;
const MAX_USER_UPLOAD_SIZE = 20 * 1024 * 1024;

// ========== 管理员上传 ==========
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
dropZone.addEventListener('click', () => fileInput.click());
dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
dropZone.addEventListener('drop', (e) => {
  e.preventDefault(); dropZone.classList.remove('drag-over');
  if (e.dataTransfer.files.length) handleFileSelection(e.dataTransfer.files);
});
fileInput.addEventListener('change', (e) => handleFileSelection(e.target.files));

function handleFileSelection(newFiles) {
  for (let file of newFiles) {
    if (file.type === '' && (file.size === 0 || file.size % 4096 === 0)) { alert('检测到文件夹，已跳过: ' + file.name); continue; }
    if (file.size > MAX_UPLOAD_SIZE) { alert(\`文件"\${file.name}"超过50MB限制，已跳过\`); continue; }
    pendingUploadFiles.push(file);
  }
  if (pendingUploadFiles.length > 0) { showSelectedFiles(); checkDuplicate(); }
}

function showSelectedFiles() {
  if (pendingUploadFiles.length === 0) { document.getElementById('selectedFiles').style.display = 'none'; return; }
  const container = document.getElementById('selectedFilesList');
  container.innerHTML = pendingUploadFiles.map((f, i) => \`
    <div style="display:flex;align-items:center;justify-content:space-between;background:var(--bg-glass-inner);padding:10px;border-radius:8px;margin-bottom:8px;border:1px solid var(--border-color);">
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0;">
        <i class="fa-solid fa-file" style="color:var(--baidu-blue);font-size:16px;"></i>
        <div style="flex:1;min-width:0;">
          <p style="color:var(--text-primary);font-size:13px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">\${f.name}</p>
          <p style="color:var(--text-secondary);font-size:11px;margin-top:2px;">\${formatBytes(f.size)}</p>
        </div>
      </div>
      <button onclick="removeFile(\${i})" style="background:transparent;border:1px solid #ff4d4f;border-radius:6px;color:#ff4d4f;cursor:pointer;font-size:14px;padding:4px 8px;">
        <i class="fa-solid fa-times"></i>
      </button>
    </div>
  \`).join('');
  document.getElementById('selectedFiles').style.display = 'block';
}

function removeFile(index) {
  pendingUploadFiles.splice(index, 1);
  showSelectedFiles();
  if (pendingUploadFiles.length === 0) checkDuplicate();
}

function clearSelectedFiles() {
  pendingUploadFiles = [];
  fileInput.value = '';
  document.getElementById('selectedFiles').style.display = 'none';
  document.getElementById('duplicateWarning').style.display = 'none';
}

async function checkDuplicate() {
  const password = document.getElementById('newFilePw').value.trim();
  if (pendingUploadFiles.length === 0 && !password) { document.getElementById('duplicateWarning').style.display = 'none'; return; }
  const filename = pendingUploadFiles.length > 0 ? pendingUploadFiles[0].name : null;
  const res = await fetch('/api/check-duplicate', {
    method: 'POST',
    headers: { 'Authorization': getAdminPw(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename, password: password || null })
  });
  const data = await res.json();
  if (data.hasDuplicate) {
    document.getElementById('duplicateWarningText').innerHTML = data.warnings.map(w => \`<p style="margin-bottom:6px;">\${w.message}</p>\`).join('');
    document.getElementById('duplicateWarning').style.display = 'block';
  } else {
    document.getElementById('duplicateWarning').style.display = 'none';
  }
}

async function checkUserDuplicate() {
  const password = document.getElementById('userFilePw').value.trim();
  const filename = userPendingFiles.length > 0 ? userPendingFiles[0].name : null;
  if (!password && !filename) { document.getElementById('userDuplicateWarning').style.display = 'none'; return; }
  try {
    const res = await fetch('/api/check-duplicate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, password: password || null })
    });
    if (!res.ok) { document.getElementById('userDuplicateWarning').style.display = 'none'; return; }
    const data = await res.json();
    if (data.hasDuplicate) {
      document.getElementById('userDuplicateWarningText').innerHTML = data.warnings.map(w => \`<p style="margin-bottom:6px;">\${w.message}</p>\`).join('');
      document.getElementById('userDuplicateWarning').style.display = 'block';
    } else {
      document.getElementById('userDuplicateWarning').style.display = 'none';
    }
  } catch (e) {
    document.getElementById('userDuplicateWarning').style.display = 'none';
  }
}

const getAdminPw = () => document.getElementById('adminPw').value;

async function unlockAdmin() {
  const pw = prompt("请输入管理员验证密码:");
  if (!pw) return;
  const res = await fetch('/api/list', { headers: { 'Authorization': pw } });
  if (res.status === 401) { alert('验证失败：管理员密码错误'); return; }
  const data = await res.json();
  document.getElementById('adminPw').value = pw;
  document.getElementById('adminPanel').style.display = 'block';
  document.getElementById('adminEntrance').style.display = 'none';
  allFiles = data;
  render(data, 'adminFileList', null, true);
}

async function searchFiles() {
  const pw = document.getElementById('sharePw').value;
  if (!pw) return;
  const res = await fetch('/api/list?share_pw=' + encodeURIComponent(pw));
  const data = await res.json();
  if (data.error) { alert(data.error); return; }
  allFiles = data;
  render(data, 'fileList', pw, false);
}

async function adminListAll() {
  const res = await fetch('/api/list', { headers: { 'Authorization': getAdminPw() } });
  if (res.status === 401) { alert('登录过期或密码错误'); location.reload(); return; }
  const data = await res.json();
  allFiles = data;
  selectedFiles.clear();
  render(data, 'adminFileList', null, true);
}

function filterFiles() {
  const search = document.getElementById('fileSearch').value.toLowerCase();
  const filtered = allFiles.filter(f => f.name.toLowerCase().includes(search) || (f.description && f.description.toLowerCase().includes(search)));
  render(filtered, 'fileList', document.getElementById('sharePw').value, false);
}

function filterAdminFiles() {
  const search = document.getElementById('adminSearch').value.toLowerCase();
  const filtered = allFiles.filter(f => f.name.toLowerCase().includes(search) || (f.description && f.description.toLowerCase().includes(search)));
  render(filtered, 'adminFileList', null, true);
}

function toggleSelect(id) {
  if (selectedFiles.has(id)) selectedFiles.delete(id); else selectedFiles.add(id);
  document.getElementById('batchDelBtn').style.display = selectedFiles.size === 0 ? 'none' : 'block';
}

async function uploadFiles() {
  const btn = document.getElementById('upBtn');
  const fpw = document.getElementById('newFilePw').value.trim();
  const desc = document.getElementById('newDesc').value;
  const expiry = document.getElementById('expirySelect').value;
  if (pendingUploadFiles.length === 0 || !getAdminPw() || !fpw) return alert('请选择文件并输入提取码');
  btn.innerHTML = '<i class="fa-solid fa-spinner spinner" style="margin-right:6px;"></i>上传中...';
  btn.disabled = true;
  const progressContainer = document.getElementById('progressContainer');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const uploadingFileName = document.getElementById('uploadingFileName');
  const uploadStatus = document.getElementById('uploadStatus');
  let successCount = 0, failCount = 0;
  for (let i = 0; i < pendingUploadFiles.length; i++) {
    const file = pendingUploadFiles[i];
    uploadingFileName.textContent = file.name;
    uploadStatus.textContent = \`正在上传第 \${i + 1}/\${pendingUploadFiles.length} 个文件\`;
    progressContainer.style.display = 'block';
    const fd = new FormData();
    fd.append('file', file); fd.append('file_password', fpw); fd.append('description', desc);
    if (expiry && expiry !== '0') fd.append('expiry_hours', expiry);
    try {
      const xhr = new XMLHttpRequest();
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) { const p = Math.round((e.loaded / e.total) * 100); progressBar.style.width = p + '%'; progressText.textContent = p + '%'; }
      });
      await new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) { successCount++; resolve(); }
          else { const r = JSON.parse(xhr.responseText); alert(\`上传失败: \${r.error || '未知错误'}\`); failCount++; reject(); }
        });
        xhr.addEventListener('error', reject);
        xhr.open('POST', '/api/upload');
        xhr.setRequestHeader('Authorization', getAdminPw());
        xhr.send(fd);
      });
    } catch (e) { failCount++; }
    progressBar.style.width = '0%';
  }
  alert(\`上传完成!\n\n成功: \${successCount} 个\n失败: \${failCount} 个\`);
  progressContainer.style.display = 'none';
  clearSelectedFiles();
  adminListAll();
  document.getElementById('newFilePw').value = '';
  document.getElementById('newDesc').value = '';
  document.getElementById('expirySelect').value = '0';
  btn.innerHTML = '<i class="fa-solid fa-upload" style="margin-right:6px;"></i>开始上传';
  btn.disabled = false;
}

async function delFile(id) {
  if (!confirm('确定删除?')) return;
  await fetch('/api/delete/' + id, { method: 'DELETE', headers: { 'Authorization': getAdminPw() } });
  adminListAll();
}

async function batchDelete() {
  if (selectedFiles.size === 0) return;
  if (!confirm(\`确定删除选中的 \${selectedFiles.size} 个文件?\`)) return;
  await fetch('/api/batch-delete', {
    method: 'POST',
    headers: { 'Authorization': getAdminPw(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ ids: Array.from(selectedFiles) })
  });
  selectedFiles.clear();
  adminListAll();
}

// ========== 用户上传 ==========
const userDropZone = document.getElementById('userDropZone');
const userFileInput = document.getElementById('userFileInput');
userDropZone.addEventListener('click', () => userFileInput.click());
userDropZone.addEventListener('dragover', (e) => { e.preventDefault(); userDropZone.classList.add('drag-over'); });
userDropZone.addEventListener('dragleave', () => userDropZone.classList.remove('drag-over'));
userDropZone.addEventListener('drop', (e) => {
  e.preventDefault(); userDropZone.classList.remove('drag-over');
  if (e.dataTransfer.files.length) handleUserFileSelection(e.dataTransfer.files);
});
userFileInput.addEventListener('change', (e) => handleUserFileSelection(e.target.files));

function handleUserFileSelection(newFiles) {
  for (let file of newFiles) {
    if (file.type === '' && (file.size === 0 || file.size % 4096 === 0)) { alert('检测到文件夹，已跳过: ' + file.name); continue; }
    if (file.size > MAX_USER_UPLOAD_SIZE) { alert(\`文件"\${file.name}"超过20MB限制，已跳过\`); continue; }
    userPendingFiles.push(file);
  }
  if (userPendingFiles.length > 0) { showUserSelectedFiles(); checkUserDuplicate(); }
}

function showUserSelectedFiles() {
  if (userPendingFiles.length === 0) { document.getElementById('userSelectedFiles').style.display = 'none'; return; }
  const container = document.getElementById('userSelectedFilesList');
  container.innerHTML = userPendingFiles.map((f, i) => \`
    <div style="display:flex;align-items:center;justify-content:space-between;background:var(--bg-glass-inner);padding:10px;border-radius:8px;margin-bottom:8px;border:1px solid var(--border-color);">
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0;">
        <i class="fa-solid fa-file" style="color:var(--baidu-blue);font-size:16px;"></i>
        <div style="flex:1;min-width:0;">
          <p style="color:var(--text-primary);font-size:13px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">\${f.name}</p>
          <p style="color:var(--text-secondary);font-size:11px;margin-top:2px;">\${formatBytes(f.size)}</p>
        </div>
      </div>
      <button onclick="removeUserFile(\${i})" style="background:transparent;border:1px solid #ff4d4f;border-radius:6px;color:#ff4d4f;cursor:pointer;font-size:14px;padding:4px 8px;">
        <i class="fa-solid fa-times"></i>
      </button>
    </div>
  \`).join('');
  document.getElementById('userSelectedFiles').style.display = 'block';
}

function removeUserFile(index) { userPendingFiles.splice(index, 1); showUserSelectedFiles(); }
function clearUserFiles() {
  userPendingFiles = [];
  userFileInput.value = '';
  document.getElementById('userSelectedFiles').style.display = 'none';
  document.getElementById('userDuplicateWarning').style.display = 'none';
}

async function uploadUserFiles() {
  const btn = document.getElementById('userUpBtn');
  const fpw = document.getElementById('userFilePw').value.trim();
  const desc = document.getElementById('userDesc').value;
  const expiry = document.getElementById('userExpirySelect').value;
  if (userPendingFiles.length === 0 || !fpw) return alert('请选择文件并输入提取码');
  btn.innerHTML = '<i class="fa-solid fa-spinner spinner" style="margin-right:6px;"></i>上传中...';
  btn.disabled = true;
  const progressContainer = document.getElementById('userProgressContainer');
  const progressBar = document.getElementById('userProgressBar');
  const progressText = document.getElementById('userProgressText');
  const uploadingFileName = document.getElementById('userUploadingFileName');
  const uploadStatus = document.getElementById('userUploadStatus');
  let successCount = 0, failCount = 0;
  for (let i = 0; i < userPendingFiles.length; i++) {
    const file = userPendingFiles[i];
    uploadingFileName.textContent = file.name;
    uploadStatus.textContent = \`正在上传第 \${i + 1}/\${userPendingFiles.length} 个文件\`;
    progressContainer.style.display = 'block';
    const fd = new FormData();
    fd.append('file', file); fd.append('file_password', fpw); fd.append('description', desc); fd.append('expiry_hours', expiry);
    try {
      const xhr = new XMLHttpRequest();
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) { const p = Math.round((e.loaded / e.total) * 100); progressBar.style.width = p + '%'; progressText.textContent = p + '%'; }
      });
      await new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) { successCount++; resolve(); }
          else { try { const r = JSON.parse(xhr.responseText); alert(\`上传失败: \${r.error || '未知错误'}\`); } catch(e) {} failCount++; reject(); }
        });
        xhr.addEventListener('error', reject);
        xhr.open('POST', '/api/user-upload');
        xhr.send(fd);
      });
    } catch (e) { failCount++; }
    progressBar.style.width = '0%';
  }
  alert(\`上传完成!\n\n成功: \${successCount} 个\n失败: \${failCount} 个\`);
  progressContainer.style.display = 'none';
  clearUserFiles();
  document.getElementById('userFilePw').value = '';
  document.getElementById('userDesc').value = '';
  document.getElementById('userExpirySelect').value = '60';
  btn.innerHTML = '<i class="fa-solid fa-upload" style="margin-right:6px;"></i>开始上传';
  btn.disabled = false;
}

// ========== 通用工具 ==========
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024, sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function formatExpiry(expiresAt) {
  if (!expiresAt) return '永久';
  const date = new Date(expiresAt), now = new Date(), diff = date - now;
  if (diff < 0) return '已过期';
  const totalMinutes = Math.floor(diff / (1000 * 60));
  if (totalMinutes < 1) return '即将过期';
  const days    = Math.floor(totalMinutes / 1440);
  const hours   = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  const parts = [];
  if (days > 0)    parts.push(\`\${days}天\`);
  if (hours > 0)   parts.push(\`\${hours}小时\`);
  if (minutes > 0) parts.push(\`\${minutes}分钟\`);
  return parts.join(' ') + '后';
}

function isOfficeFile(filename) {
  return ['doc','docx','xls','xlsx','ppt','pptx'].includes(filename.toLowerCase().split('.').pop());
}

function showFileDetail(file, pw, isAdmin) {
  const content = document.getElementById('detailContent');
  const MAX_DOWNLOAD = 20 * 1024 * 1024;
  const canDownload = file.size <= MAX_DOWNLOAD;
  content.innerHTML = \`
    <div style="background:var(--bg-glass-card);backdrop-filter:blur(12px);border:1px solid var(--border-color);border-radius:10px;padding:16px;margin-bottom:16px;">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
        <div style="width:48px;height:48px;background:var(--baidu-blue-light);border-radius:10px;display:flex;align-items:center;justify-content:center;border:1px solid var(--baidu-blue);">
          <i class="fa-solid \${getFileIcon(file.name, file.mime_type)[0]}" style="color:\${getFileIcon(file.name, file.mime_type)[1]};font-size:20px;"></i>
        </div>
        <div style="flex:1;min-width:0;">
          <p style="color:var(--text-primary);font-weight:500;font-size:15px;word-break:break-all;margin-bottom:4px;">\${file.name}</p>
          <p style="color:var(--text-secondary);font-size:13px;">\${formatBytes(file.size)}</p>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
        <div style="background:var(--bg-glass-inner);padding:12px;border-radius:8px;border:1px solid var(--border-color);">
          <p style="color:var(--text-secondary);font-size:11px;margin-bottom:4px;">下载次数</p>
          <p style="color:var(--text-primary);font-weight:500;font-size:15px;">\${file.download_count || 0} 次</p>
        </div>
        <div style="background:var(--bg-glass-inner);padding:12px;border-radius:8px;border:1px solid var(--border-color);">
          <p style="color:var(--text-secondary);font-size:11px;margin-bottom:4px;">过期时间</p>
          <p style="color:var(--text-primary);font-weight:500;font-size:15px;">\${formatExpiry(file.expires_at)}</p>
        </div>
        \${isAdmin ? \`
        <div style="background:var(--baidu-blue-light);padding:12px;border-radius:8px;grid-column:span 2;border:1px solid var(--baidu-blue);">
          <p style="color:var(--baidu-blue);font-size:11px;margin-bottom:4px;">提取码</p>
          <p style="color:var(--baidu-blue);font-weight:500;font-size:15px;letter-spacing:1px;">\${file.password}</p>
        </div>\` : ''}
      </div>
    </div>
    \${file.description ? \`<div class="desc-box"><p class="desc-label"><i class="fa-solid fa-sticky-note" style="margin-right:4px;"></i>文件说明</p><p class="desc-text">\${file.description}</p></div>\` : ''}
    \${!canDownload ? \`<div class="size-warning"><p><i class="fa-solid fa-exclamation-circle" style="margin-right:6px;"></i>文件大小超过20MB，无法下载</p></div>\` : ''}
  \`;
  document.getElementById('detailModal').classList.add('active');
}

function closeDetailModal(event) {
  if (event && event.target.id !== 'detailModal') return;
  document.getElementById('detailModal').classList.remove('active');
}

function showPreview(id, name, mimeType, pw, isAdmin) {
  const params = isAdmin ? \`admin_pw=\${getAdminPw()}\` : \`pw=\${encodeURIComponent(pw)}\`;
  const url = \`/api/preview/\${id}?\${params}\`;
  document.getElementById('previewTitle').innerHTML = \`<i class="fa-solid fa-eye" style="margin-right:8px;"></i>\${name}\`;
  const content = document.getElementById('previewContent');
  if (isOfficeFile(name)) {
    content.innerHTML = \`<div style="border-radius:8px;overflow:hidden;"><iframe src="https://view.officeapps.live.com/op/embed.aspx?src=\${encodeURIComponent(window.location.origin + url)}" style="width:100%;height:75vh;border:none;"></iframe></div>\`;
  } else if (mimeType.startsWith('image/')) {
    content.innerHTML = \`<div style="text-align:center;padding:20px;"><img src="\${url}" style="max-width:100%;height:auto;border-radius:8px;"></div>\`;
  } else if (mimeType.startsWith('video/')) {
    content.innerHTML = \`<div style="padding:20px;"><video controls style="width:100%;border-radius:8px;"><source src="\${url}" type="\${mimeType}"></video></div>\`;
  } else if (mimeType === 'application/pdf') {
    content.innerHTML = \`<div style="border-radius:8px;overflow:hidden;"><iframe src="\${url}" style="width:100%;height:75vh;border:none;"></iframe></div>\`;
  } else if (mimeType.startsWith('text/') || mimeType === 'application/json') {
    fetch(url).then(r => r.text()).then(text => {
      content.innerHTML = \`<pre style="background:var(--bg-glass-input);padding:20px;border-radius:8px;overflow:auto;max-height:75vh;font-size:12px;line-height:1.6;color:var(--text-primary);border:1px solid var(--border-color);">\${text.slice(0, 10000)}</pre>\`;
    });
  } else {
    content.innerHTML = \`<div style="background:var(--bg-glass-card);border:1px solid var(--border-color);border-radius:8px;padding:48px;text-align:center;"><i class="fa-solid fa-eye-slash" style="font-size:64px;color:var(--text-secondary);margin-bottom:20px;display:block;"></i><p style="color:var(--text-secondary);">此文件类型不支持预览</p></div>\`;
  }
  document.getElementById('previewModal').classList.add('active');
}

function closePreview(event) {
  if (event && event.target.id !== 'previewModal') return;
  document.getElementById('previewModal').classList.remove('active');
}

function render(data, target, pw, isAdmin) {
  const container = document.getElementById(target);
  const MAX_DOWNLOAD = 20 * 1024 * 1024;
  if (!data || data.length === 0) {
    container.innerHTML = \`<div class="empty-state"><i class="fa-solid fa-folder-open" style="font-size:64px;color:var(--text-secondary);margin-bottom:16px;display:block;"></i><p>暂无文件</p></div>\`;
    return;
  }
  container.innerHTML = data.map(f => {
    const canDownload = f.size <= MAX_DOWNLOAD;
    const shortDesc = f.description && f.description.length > 40 ? f.description.substring(0, 40) + '...' : f.description;
    return \`
      <div class="file-card">
        <div style="display:flex;align-items:flex-start;gap:14px;">
          \${isAdmin ? \`<input type="checkbox" onchange="toggleSelect(\${f.id})" style="margin-top:4px;">\` : ''}
          <div style="flex:1;min-width:0;">
            <div onclick='showFileDetail(\${JSON.stringify(f).replace(/'/g, "&#39;")}, "\${isAdmin ? '' : pw}", \${isAdmin})' style="cursor:pointer;margin-bottom:10px;">
              <p style="color:var(--text-primary);font-weight:500;font-size:14px;margin-bottom:6px;word-break:break-all;line-height:1.5;">
                <i class="fa-solid \${getFileIcon(f.name, f.mime_type)[0]}" style="color:\${getFileIcon(f.name, f.mime_type)[1]};margin-right:6px;"></i>\${f.name}
              </p>
              <div style="color:var(--text-secondary);font-size:12px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                \${isAdmin ? \`<span style="background:var(--baidu-blue-light);color:var(--baidu-blue);padding:3px 10px;border-radius:6px;font-weight:500;border:1px solid var(--baidu-blue);">\${f.password}</span>\` : ''}
                <span>\${formatBytes(f.size)}</span><span>·</span>
                <span>下载 \${f.download_count || 0} 次</span><span>·</span>
                <span>\${formatExpiry(f.expires_at)}</span>
              </div>
              \${shortDesc ? \`<p style="color:var(--text-secondary);font-size:12px;font-style:italic;margin-top:8px;background:var(--bg-glass-inner);padding:8px;border-radius:6px;border:1px solid var(--border-color);line-height:1.5;"><i class="fa-solid fa-sticky-note" style="margin-right:4px;color:var(--baidu-blue);"></i>\${shortDesc}</p>\` : ''}
            </div>
          </div>
          <div style="display:flex;gap:8px;flex-shrink:0;flex-wrap:wrap;">
            <button onclick="showPreview(\${f.id}, '\${f.name.replace(/'/g, "\\'")}', '\${f.mime_type}', '\${isAdmin ? '' : pw}', \${isAdmin})" class="icon-btn" title="预览">
              <i class="fa-solid fa-eye"></i>
            </button>
            <a href="/api/download/\${f.id}?\${isAdmin ? 'admin_pw='+getAdminPw() : 'pw='+encodeURIComponent(pw)}" class="icon-btn" title="\${canDownload ? '下载' : '文件过大(>20MB)'}" \${!canDownload ? 'style="opacity:0.3;pointer-events:none;"' : ''}>
              <i class="fa-solid fa-download"></i>
            </a>
            \${isAdmin ? \`
            <button onclick="showShare('\${f.name.replace(/'/g, "\\'")}', '\${f.password}')" class="icon-btn" title="分享" style="border-color:#52c41a;">
              <i class="fa-solid fa-share-nodes" style="color:#52c41a;"></i>
            </button>
            <button onclick="delFile(\${f.id})" class="icon-btn" title="删除" style="border-color:#ff4d4f;">
              <i class="fa-solid fa-trash" style="color:#ff4d4f;"></i>
            </button>\` : ''}
          </div>
        </div>
      </div>
    \`;
  }).join('');
}

function showShare(name, code) {
  const url = window.location.origin + '/s/' + code;
  const siteName = document.querySelector('.baidu-logo')?.textContent.trim() || '文件分享';
  document.getElementById('shareText').value = \`我通过\${siteName}向你分享文件\n文件名: \${name}\n\n链接: \${url}\n提取码: \${code}\`;
  document.getElementById('modal').classList.add('active');
}

function copyShareText() {
  const t = document.getElementById('shareText');
  t.select();
  document.execCommand('copy');
  alert('复制成功');
  document.getElementById('modal').classList.remove('active');
}

if (document.getElementById('sharePw').value) searchFiles();
// 禁止提取码输入空格（兼容手机输入法和电脑键盘）
function noSpace(el) {
  el.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.keyCode === 32) e.preventDefault();
  });
  el.addEventListener('input', function() {
    const pos = this.selectionStart;
    const newVal = this.value.replace(/ /g, '');
    if (newVal !== this.value) {
      this.value = newVal;
      this.setSelectionRange(pos - 1, pos - 1);
    }
  });
}

['sharePw', 'newFilePw', 'userFilePw'].forEach(id => {
  const el = document.getElementById(id);
  if (el) noSpace(el);
});
</script>
</body>
</html>
`;
}
