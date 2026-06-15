import mongoose from 'mongoose';

import IAulaDAO from './IAulaDAO.js';

import Aula from '../models/Aula.js';

class AulaDAO_MongoDB extends IAulaDAO{

   constructor(){ 
        super();
    }
    async salvar(req){
        const aula =  await Aula.create(req.body);
        return aula !== null;
    }  
    async consultar(){ 
        let aulas = await Aula.find();
        return aulas; 
    }
    async alterar(req){
       let aula = await Aula.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return aula !== null;  
    }
    async deletar(req){
        let aula = await Aula.findByIdAndDelete(req.params.id);
        return aula !== null; 
    } 
    async consultarById(req){
        let aula = await Aula.findById(req.params.id); 
        return aula;
    }  
}
export default AulaDAO_MongoDB;