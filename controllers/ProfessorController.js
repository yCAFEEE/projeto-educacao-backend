import IProfessorController from './IProfessorController.js';

import ProfessorDAO from '../persistencelayer/dao/ProfessorDAO_MongoDB.js';
let professordao = new ProfessorDAO();

class ProfessorController extends IProfessorController{
  constructor(){
    super();    
  }
  async consultar(req, res)
    {
       let professors = await professordao.consultar();
        return res.json(professors);
    }
  async salvar(req, res)
     {
        const professor =  await professordao.salvar(req);
        return res.json(professor);
     }
   async deletar(req,res){
        let professor = await professordao.deletar(req);
        return res.json(professor);
    }
   async alterar(req,res){
        let professor = await professordao.alterar(req);
        return res.json(professor);
    }
   async consultarById(req,res)
    {
        let professor = await professordao.consultarById(req);
        return res.json(professor);
    }
  
}
export default ProfessorController;