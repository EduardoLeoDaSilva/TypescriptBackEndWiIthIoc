import { Sequelize } from 'sequelize-typescript'

export class DataBaseConnection {

    static startConnection() {

        console.log(process.env.DBURL)
        const db = new Sequelize({
            repositoryMode: true,
            database: 'dbteste',
            host: process.env.DBURL,
            dialect: 'mysql',
            username: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            models: [__dirname.replace('configs', '') + 'models'], // or [Player, Team],
        });
        db.sync();
        return db;
    }
}
