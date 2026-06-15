import IExercicioController from './IExercicioController.js';

import ExercicioDAO from '../persistencelayer/dao/ExercicioDAO_MongoDB.js';
let exerciciodao = new ExercicioDAO();

class ExercicioController extends IExercicioController{
  constructor(){
    super();    
  }
  async consultar(req, res)
    {
       let exercicios = await exerciciodao.consultar();
        return res.json(exercicios);
    }
  async salvar(req, res)
     {
        const exercicio =  await exerciciodao.salvar(req);
        return res.json(exercicio);
     }
   async deletar(req,res){
        let exercicio = await exerciciodao.deletar(req);
        return res.json(exercicio);
    }
   async alterar(req,res){
        let exercicio = await exerciciodao.alterar(req);
        return res.json(exercicio);
    }
   async consultarById(req,res)
    {
        let exercicio = await exerciciodao.consultarById(req);
        return res.json(exercicio);
    }
  
}
export default ExercicioController;