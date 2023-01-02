import { Request, Response } from "express";
import { PersonService } from "../services/person-service.js";
import { Injectable } from "../Ioc/decorators/injectable.js";
import Person from "../models/person.js";

@Injectable
export class PersonController {

    constructor(private personService: PersonService) { }

    async getAllPerson(req: Request, res: Response) {
        let result = await this.personService.getPersons();
        res.status(200).json(result);
    }

    getPerson(req: Request, res: Response) {

    }

    async savePerson(req: Request, res: Response) {

        let result = await this.personService.savePerson(req.body);
        res.status(200).json(result);
    }

    updatePerson(req: Request, res: Response) {

    }

    deletePerson(req: Request, res: Response) {

    }
}


