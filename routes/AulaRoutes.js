import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import IAulaRoutes from './IAulaRoutes.js';
import AulaController from '../controllers/AulaController.js';

let aulaController = new AulaController();

class AulaRoutes extends IAulaRoutes{

    constructor(app){   
        super();
        this.app = app;
    }

    get(){
        this.app.get('/', (req, res) => {
        res.send('Rest API com Polimorfismo');
        });
        this.app.get('/aula', aulaController.consultar);

        this.app.get('/aula/search/:id', aulaController.consultarById)
    }
    post(){
        this.app.post('/aula', aulaController.salvar);
    }
    put(){
        this.app.put('/aula/:id', aulaController.alterar);
    }
    delete(){
        this.app.delete('/aula/:id', aulaController.deletar);
    }
}
export default AulaRoutes;

