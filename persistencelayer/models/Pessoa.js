import mongoose from "mongoose";

const PessoaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    usuario: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
});

export default PessoaSchema;