import mongoose from 'mongoose';

import IMateriaDAO from './IMateriaDAO.js';

import Materia from '../models/Materia.js';

class MateriaDAO_MongoDB extends IMateriaDAO{

   constructor(){ 
        super();
    }
    async salvar(req){
        const materia =  await Materia.create(req.body);
        return materia !== null;
    }  
    async consultar(){ 
        let materias = await Materia.find();
        return materias; 
    }
    async alterar(req){
       let materia = await Materia.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return materia !== null;  
    }
    async deletar(req){
        let materia = await Materia.findByIdAndDelete(req.params.id);
        return materia !== null; 
    } 
    async consultarById(req){
        let materia = await Materia.findById(req.params.id);
        return materia;
    }  
}
export default MateriaDAO_MongoDB;