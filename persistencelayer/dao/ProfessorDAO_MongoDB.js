import mongoose from 'mongoose';

import IProfessorDAO from './IProfessorDAO.js';

import Professor from '../models/Professor.js';

class ProfessorDAO_MongoDB extends IProfessorDAO{

   constructor(){ 
        super();
    }
    async salvar(req){
        const professor =  await Professor.create(req.body);
        return professor !== null;
    }  
    async consultar(){ 
        let professors = await Professor.find();
        return professors; 
    }
    async alterar(req){
       let professor = await Professor.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return professor !== null;  
    }
    async deletar(req){
        let professor = await Professor.findByIdAndDelete(req.params.id);
        return professor !== null; 
    } 
    async consultarById(req){
        let professor = await Professor.findById(req.params.id); 
        return professor;
    }  
}
export default ProfessorDAO_MongoDB;