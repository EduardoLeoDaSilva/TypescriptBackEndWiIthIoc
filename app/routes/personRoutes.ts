import express from 'express';
import { PersonController } from '../controllers/PersonController';
import { Injector } from '../Ioc/injector';
import Person from '../models/person.js';

const routes = express.Router();


routes.get('/', async (req, res) => {
    const controller= Injector.ResolveService<PersonController>(PersonController);
    await controller.getAllPerson(req, res);
    console.log(controller)
})
.get('/:id', (req, res) => {

})
.post('/', async(req, res) => {
    const controller= Injector.ResolveService<PersonController>(PersonController);
    await controller.savePerson(req, res);
    console.log(controller)
})
.put('/', (req, res) => {

})
.delete('/', (req, res) => {

});

export default routes;