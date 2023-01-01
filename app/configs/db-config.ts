import { Sequelize } from 'sequelize-typescript'

export class DataBaseConnection {

    static startConnection() {
        console.log(__dirname.replace('configs', '') + 'models')

        const db = new Sequelize({
            repositoryMode: true,
            database: 'dbteste',
            dialect: 'mysql',
            username: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            models: [__dirname.replace('configs', '') + 'models'], // or [Player, Team],
        });
        db.sync();
        return db;
    }
}
