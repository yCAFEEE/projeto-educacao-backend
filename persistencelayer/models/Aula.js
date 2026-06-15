import mongoose from 'mongoose';

const AulaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    desc: { type: String, required: true },
    url: { type: String, required: true },
    explicacao: { type: String, required: true },
    exercicios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercicio" }]
});

export default mongoose.model("Aula", AulaSchema);