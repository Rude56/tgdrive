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
