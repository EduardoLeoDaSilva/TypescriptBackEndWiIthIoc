import jwt, { JwtPayload } from 'jsonwebtoken'
import Person from "../models/person.js";
import { v4 as uuid } from "uuid";

export class JwtUtils {


    static generateToken(person: Person): string {
        let token = jwt.sign({ claimTeste: 'teste' }, <string>process.env.SECRET, {
            algorithm: 'RS256',
            jwtid: uuid(),
            expiresIn: '3h',
            audience: 'externa',
            issuer: 'api',
            subject: person.email,
        })

        return token;
    }

    static CheckToken(token: string): JwtPayload | null {
        let decoded = jwt.verify(token, process.env.SECRET as string);

        if (decoded) {
            return decoded as JwtPayload;
        }

        return null;
    }

}