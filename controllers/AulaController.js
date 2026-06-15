import IAulaController from './IAulaController.js';

import AulaDAO from '../persistencelayer/dao/AulaDAO_MongoDB.js';
let auladao = new AulaDAO();

class AulaController extends IAulaController{
  constructor(){
    super();    
  }
  async consultar(req, res)
    {
       let aulas = await auladao.consultar();
        return res.json(aulas);
    }
  async salvar(req, res)
     {
        const aula =  await auladao.salvar(req);
        return res.json(aula);
     }
   async deletar(req,res){
        let aula = await auladao.deletar(req);
        return res.json(aula);
    }
   async alterar(req,res){
        let aula = await auladao.alterar(req);
        return res.json(aula);
    }
   async consultarById(req,res)
    {
        let aula = await auladao.consultarById(req);
        return res.json(aula);
    }
  
}
export default AulaController;