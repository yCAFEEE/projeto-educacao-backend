import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import IProfessorRoutes from './IProfessorRoutes.js';
import ProfessorController from '../controllers/ProfessorController.js';

let professorController = new ProfessorController();

class ProfessorRoutes extends IProfessorRoutes{

    constructor(app){   
        super();
        this.app = app;
    }

    get(){
        this.app.get('/', (req, res) => {
        res.send('Rest API com Polimorfismo');
        });
        this.app.get('/professor', professorController.consultar);

        this.app.get('/professor/search/:id', professorController.consultarById)
    }
    post(){
        this.app.post('/professor', professorController.salvar);
    }
    put(){
        this.app.put('/professor/:id', professorController.alterar);
    }
    delete(){
        this.app.delete('/professor/:id', professorController.deletar);
    }
}
export default ProfessorRoutes;
