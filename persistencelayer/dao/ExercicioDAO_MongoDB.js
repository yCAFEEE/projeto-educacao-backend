import mongoose from 'mongoose';

import IExercicioDAO from './IExercicioDAO.js';

import Exercicio from '../models/Exercicio.js';

class ExercicioDAO_MongoDB extends IExercicioDAO{

   constructor(){ 
        super();
    }
    async salvar(req){
        const exercicio =  await Exercicio.create(req.body);
        return exercicio !== null;
    }  
    async consultar(){ 
        let exercicios = await Exercicio.find();
        return exercicios; 
    }
    async alterar(req){
       let exercicio = await Exercicio.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return exercicio !== null;  
    }
    async deletar(req){
        let exercicio = await Exercicio.findByIdAndDelete(req.params.id);
        return exercicio !== null; 
    } 
    async consultarById(req){
        let exercicio = await Exercicio.findById(req.params.id); 
        return exercicio;
    }  
}
export default ExercicioDAO_MongoDB;