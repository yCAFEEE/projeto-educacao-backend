import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const defaultDbPath = path.join(__dirname, 'db.sqlite');
const dbPath = process.env.DB_PATH || (process.env.VERCEL ? path.join(os.tmpdir(), 'db.sqlite') : defaultDbPath);

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

DB.prepare(`
    CREATE TABLE IF NOT EXISTS Progresso (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_usuario INTEGER NOT NULL,
        conteudo TEXT NOT NULL,
        assunto TEXT NOT NULL,
        progresso INTEGER NOT NULL DEFAULT 0,
        data_conclusao TEXT,
        FOREIGN KEY (id_usuario) REFERENCES Usuarios(id)
    )
`).run();

DB.prepare(`
    CREATE TABLE IF NOT EXISTS Acessos (
        id_usuario INTEGER NOT NULL,
        conteudo TEXT NOT NULL,
        data_acesso TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_usuario) REFERENCES Usuarios(id)
    )
`).run();

export default DB;