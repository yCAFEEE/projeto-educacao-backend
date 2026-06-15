import mongoose from 'mongoose';

const MateriaSchema = mongoose.Schema({
    nome: { type: String, required: true },
    aulas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Aula" }]
});

export default mongoose.model("Materia", MateriaSchema);