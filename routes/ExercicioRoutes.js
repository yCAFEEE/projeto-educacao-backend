import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import IExercicioRoutes from './IExercicioRoutes.js';
import ExercicioController from '../controllers/ExercicioController.js';

let exercicioController = new ExercicioController();

class ExercicioRoutes extends IExercicioRoutes{

    constructor(app){   
        super();
        this.app = app;
    }

    get(){
        this.app.get('/', (req, res) => {
        res.send('Rest API com Polimorfismo');
        });
        this.app.get('/exercicio', exercicioController.consultar);

        this.app.get('/exercicio/search/:id', exercicioController.consultarById)
    }
    post(){
        this.app.post('/exercicio', exercicioController.salvar);
    }
    put(){
        this.app.put('/exercicio/:id', exercicioController.alterar);
    }
    delete(){
        this.app.delete('/exercicio/:id', exercicioController.deletar);
    }
}
export default ExercicioRoutes;
