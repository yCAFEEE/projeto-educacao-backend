import mongoose from 'mongoose';
import PessoaSchema from "./Pessoa.js";

const ProfessorSchema = PessoaSchema.clone();

export default mongoose.model("Professor", ProfessorSchema);