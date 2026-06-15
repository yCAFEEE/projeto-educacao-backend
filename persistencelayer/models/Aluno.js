import mongoose from "mongoose";
import PessoaSchema from "./Pessoa.js";

const AlunoSchema = PessoaSchema.clone();

AlunoSchema.add({
    aulas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Aula" }],
    exercicios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercicio" }]
});

export default mongoose.model("Aluno", AlunoSchema);