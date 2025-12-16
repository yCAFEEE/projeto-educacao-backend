import 'dotenv/config';
import express, { response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { marked } from "marked";
import matter from "gray-matter";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import mongoose from "./db.js";
import User from './src/models/User.js'

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret";
const SALT_ROUNDS = 3;
const SALT = bcrypt.genSaltSync(SALT_ROUNDS);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to lessons MD
const lessonsDir = path.resolve(__dirname, 'src', 'lessons');

// Permission for frontend to access backend
app.use(
	cors({
		origin: [
			process.env.FRONTEND_URL,
			"http://localhost:5173", 
			"http://127.0.0.1:5173"
		],
		methods: ["GET", "POST"],
		allowedHeaders: ['Content-Type', 'Authorization']
	})
);

// Allows JSON for requests
app.use(express.json());

// API Routes

// Send lesson content to client
app.get("/api/lessons/:id", (request, response) => {
	try {
		const filePath = path.join(lessonsDir, `${request.params.id}.md`);
		const raw = fs.readFileSync(filePath, "utf8");
		const { data, content } = matter(raw);

		const htmlContent = marked(content);

		response.json({
			title: data.title,
			description: data.description,
			videoURL: data.videoURL,
			htmlContent,
		});
	} catch (error) {
		console.error(error);
		response.status(404).json({ error: "Lição não encontrada." });
	}
});


// Authentication routes

// Register route
app.post("/auth/register", async (request, response) => {
	const { user, email, password } = request.body;

	// Validade all data
	if (!user || !email || !password) {
		return response.status(400).json({ error: "Informe usuário, email e senha." });
	}


	// Validate user
	if (user.length < 3)
        return response.status(401).json({ error: "O usuário deve conter pelo menos 3 caracteres." });

    if (/[ `!@#$%^&*()+\-=\[\]{};':"\\|,<>\/?~]/.test(user))
        return response.status(401).json({ error: "O usuário pode conter somente os caracteres especiais '_' e '.'." });

    if (!(/[a-zA-Z]/.test(user)))
		return response.status(401).json({ error: "O usuário deve conter pelo menos um caractere alfabético." });


	// Validate email
	if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)))
		return response.status(401).json({ error: "Informe um email válido." });


	// Validate password
	if (password.length < 6)
		return response.status(401).json({ error: "A senha deve conter pelo menos 6 caracteres." });

    if (!(/\d/.test(password)) || !(/[a-zA-Z]/.test(password)))
		return response.status(401).json({ error: "A senha deve conter letras e números." });

	try {
		// Check for already existing user and email in DB
		const isRegisteredUser = await User.findOne({ usuario: user });
		if (isRegisteredUser) return response.status(400).json({ error: "Usuário já cadastrado." });

		const isRegisteredEmail = await User.findOne({ email });
		if (isRegisteredEmail) return response.status(400).json({ error: "Email já cadastrado." });

		const hashedPassword = bcrypt.hashSync(password, SALT);
		const newUser = await User.create({ email, usuario: user, senha: hashedPassword });
		return response.json({ id: newUser._id });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ error: "Erro interno no servidor." });
	}
});

// Login route
app.post("/auth/login", async (request, response) => {
	const { auth, password } = request.body;

	// Validate data
	if (!auth || !password) {
		return response.status(400).json({ error: "Informe usuário ou email e senha." });
	}

	try {
		const userData = await User.findOne({ $or: [{ usuario: auth }, { email: auth }] }).lean();

		if (!userData) {
			return response.status(401).json({ error: "Senha ou usuário/email incorreto" });
		}

		const isCorrectPassword = bcrypt.compareSync(password, userData.senha);

		if (!isCorrectPassword) {
			return response.status(401).json({ error: "Senha ou usuário/email incorreto" });
		}

		const token = jwt.sign(
			{ id: userData.id, user: userData.usuario },
			JWT_SECRET,
			// { expiresIn: "30d" }
		);

		return response.json({
			token,
			userInfo: {
				id: userData.id,
				user: userData.usuario,
				email: userData.email
			}
		});
	} catch (error) {
		console.error(error);
		return response.status(500).json({ error: "Erro interno do servidor." })
	}
});

// Confirm Login route
app.get("/auth/me", auth, async (request, response) => {
	const userInfo = await User.findById(request.user.id, 'usuario email pontos');

	response.json({ ok: true, userInfo });
})

function auth(request, response, next) {
	const header = request.headers.authorization;

	if (!header) return response.status(401).json({ error: "Token não fornecido" });

	const [, token] = header.split(" ");

	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		request.user = payload;
		next();
	} catch (error) {
		return response.status(401).json({ error: "Token inválido" });
	}
}

// Run app on PORT
export default app;

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}