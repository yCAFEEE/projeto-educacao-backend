import IMateriaController from './IMateriaController.js';

import MateriaDAO from '../persistencelayer/dao/MateriaDAO_MongoDB.js';
let materiadao = new MateriaDAO();

class MateriaController extends IMateriaController{
  constructor(){
    super();    
  }
  async consultar(req, res)
    {
       let materias = await materiadao.consultar();
        return res.json(materias);
    }
  async salvar(req, res)
     {
        const materia =  await materiadao.salvar(req);
        return res.json(materia);
     }
   async deletar(req,res){
        let materia = await materiadao.deletar(req);
        return res.json(materia);
    }
   async alterar(req,res){
        let materia = await materiadao.alterar(req);
        return res.json(materia);
    }
   async consultarById(req,res)
    {
        let materia = await materiadao.consultarById(req);
        return res.json(materia);
    }
  
}
export default MateriaController;