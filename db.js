import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'db.sqlite');
const DB = new Database(dbPath);

DB.pragma("foreign_keys = ON");

DB.prepare(`
    CREATE TABLE IF NOT EXISTS Usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        usuario TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL,
        pontos INTEGER DEFAULT 0
    )
`).run();

export default DB;