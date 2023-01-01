import { db } from "..";
import Person from "../models/person.js";
import { Repository } from "sequelize-typescript"
import { JwtUtils } from "../utils/jwt-utils.js";
export class AuthService {


    private repo: Repository<Person>
    constructor() {
        this.repo = db.getRepository(Person);
    }

    async logIn(token: string): Promise<void> {
        try {
            let tokenDecoded = JwtUtils.CheckToken(token);
            if (tokenDecoded) {
                console.log(tokenDecoded);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}