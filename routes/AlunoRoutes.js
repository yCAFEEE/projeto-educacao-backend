import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import IAlunoRoutes from './IAlunoRoutes.js';
import AlunoController from '../controllers/AlunoController.js';

let alunoController = new AlunoController();

class AlunoRoutes extends IAlunoRoutes{

    constructor(app){   
        super();
        this.app = app;
    }

    get(){
        this.app.get('/', (req, res) => {
        res.send('Rest API com Polimorfismo');
        });
        this.app.get('/aluno', alunoController.consultar);

        this.app.get('/aluno/search/:id', alunoController.consultarById)
    }
    post(){
        this.app.post('/aluno', alunoController.salvar);
    }
    put(){
        this.app.put('/aluno/:id', alunoController.alterar);
    }
    delete(){
        this.app.delete('/aluno/:id', alunoController.deletar);
    }
}
export default AlunoRoutes;
