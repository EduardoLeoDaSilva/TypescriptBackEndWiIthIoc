import express, { Request, Response } from 'express'
import { DataBaseConnection } from './configs/db-config';

const app = express();
const port = 3000;

let db = DataBaseConnection.startConnection();

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Rabo podi')
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

export {db}