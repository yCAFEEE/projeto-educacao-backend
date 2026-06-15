import IAlunoController from './IAlunoController.js';

import AlunoDAO from '../persistencelayer/dao/AlunoDAO_MongoDB.js';
let alunodao = new AlunoDAO();

class AlunoController extends IAlunoController{
  constructor(){
    super();    
  }
  async consultar(req, res)
    {
       let alunos = await alunodao.consultar();
        return res.json(alunos);
    }
  async salvar(req, res)
     {
        const aluno =  await alunodao.salvar(req);
        return res.json(aluno);
     }
   async deletar(req,res){
        let aluno = await alunodao.deletar(req);
        return res.json(aluno);
    }
   async alterar(req,res){
        let aluno = await alunodao.alterar(req);
        return res.json(aluno);
    }
   async consultarById(req,res)
    {
        let aluno = await alunodao.consultarById(req);
        return res.json(aluno);
    }
  
}
export default AlunoController;