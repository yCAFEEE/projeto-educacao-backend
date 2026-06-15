import mongoose from 'mongoose';

const ExercicioSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    desc: { type: String, required: true },
    enunciado: { type: String, required: true },
    alternativas: [{ type: String, required: true }]
});

export default mongoose.model("Exercicio", ExercicioSchema);