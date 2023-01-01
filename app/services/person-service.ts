import { db } from "..";
import Person from "../models/person.js";
import { Repository } from "sequelize-typescript"
export class PersonService {
    private repo: Repository<Person>
    constructor() {
        this.repo = db.getRepository(Person);
    }

    async getPersons(): Promise<Person[]> {
        try {
            const persons = await this.repo.findAll({});
            return persons;
        } catch (error) {
            console.log(error.message);
            return [];
        }
    }


    async getPersonById(id: string): Promise<Person | null> {
        try {
            const person = await this.repo.findByPk(id);
            return person;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    async savePerson(person: Person): Promise<Person | null> {
        try {
            const result = await this.repo.create({ ...person });
            return result;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    async updatePerson(person: Person): Promise<[number]> {
        try {
            const result = await this.repo.update({ ...person }, {
                where: {
                    id: person.id
                }
            })
            return result;
        } catch (error) {
            console.log(error.message);
            return [0];
        }
    }

    async deletePerson(id: string): Promise<number> {
        try {
            const result = await this.repo.destroy({
                where: {
                    id: id
                }
            });
            return result;
        } catch (error) {
            console.log(error.message);
            return 0;
        }
    }
}