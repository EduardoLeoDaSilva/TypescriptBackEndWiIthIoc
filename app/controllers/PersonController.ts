import { Request, Response } from "express";
import {  PersonService } from "../services/person-service.js";

export class PersonController {

    constructor(private personService: PersonService) { }

    getAllPerson(req: Request, res: Response) {
        try {

        } catch (error) {

        }
    }

    getPerson(req: Request, res: Response) {

    }

    savePerson(req: Request, res: Response) {

    }

    updatePerson(req: Request, res: Response) {

    }

    deletePerson(req: Request, res: Response) {

    }
}