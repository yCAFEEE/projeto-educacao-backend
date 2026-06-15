import mongoose from 'mongoose';

import IAlunoDAO from './IAlunoDAO.js';

import Aluno from '../models/Aluno.js';

class AlunoDAO_MongoDB extends IAlunoDAO{

   constructor(){ 
        super();
    }
    async salvar(req){
        const aluno =  await Aluno.create(req.body);
        return aluno !== null;
    }  
    async consultar(){ 
        let alunos = await Aluno.find();
        return alunos; 
    }
    async alterar(req){
       let aluno = await Aluno.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return aluno !== null;  
    }
    async deletar(req){
        let aluno = await Aluno.findByIdAndDelete(req.params.id);
        return aluno !== null; 
    } 
    async consultarById(req){
        let aluno = await Aluno.findById(req.params.id); 
        return aluno;
    }  
}
export default AlunoDAO_MongoDB;