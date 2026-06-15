import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import IMateriaRoutes from './IMateriaRoutes.js';
import MateriaController from '../controllers/MateriaController.js';

let materiaController = new MateriaController();

class MateriaRoutes extends IMateriaRoutes{

    constructor(app){   
        super();
        this.app = app;
    }

    get(){
        this.app.get('/', (req, res) => {
        res.send('Rest API com Polimorfismo');
        });
        this.app.get('/materia', materiaController.consultar);

        this.app.get('/materia/search/:id', materiaController.consultarById)
    }
    post(){
        this.app.post('/materia', materiaController.salvar);
    }
    put(){
        this.app.put('/materia/:id', materiaController.alterar);
    }
    delete(){
        this.app.delete('/materia/:id', materiaController.deletar);
    }
}
export default MateriaRoutes;
