import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI)
	.then(() => console.log("MongoDB conectado"))
	.catch(err => console.error("Erro ao conectar no MongoDB:", err));

export default mongoose;