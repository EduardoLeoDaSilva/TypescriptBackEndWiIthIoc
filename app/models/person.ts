import { Column, DataType, PrimaryKey, Table} from "sequelize-typescript";
import { HasMany } from "sequelize-typescript/dist/associations/has/has-many";
import { Model } from "sequelize-typescript/dist/model/model/model";
import Adress from "./adress.js";

@Table
export default class Person extends Model {

    @PrimaryKey
    @Column({
        type: DataType.UUID,
        allowNull:false,
        defaultValue: DataType.UUIDV4,
        unique: true
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
        unique: true,        
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
        unique: true,
    })
    password: string;

    @HasMany(() => Adress, 'pessoa_id')
    enderecos: Adress[];
}