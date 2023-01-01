import { BelongsTo,Table,ForeignKey } from "sequelize-typescript";
import { Column } from "sequelize-typescript/dist/model/column/column";
import { PrimaryKey } from "sequelize-typescript/dist/model/column/primary-key/primary-key";
import { Model } from "sequelize-typescript/dist/model/model/model";
import { DataType } from "sequelize-typescript/dist/sequelize/data-type/data-type";
import Person  from "./person.js";

@Table
export default class Adress extends Model{

    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull:false,
        unique: true
    })
    id:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,       
    })
    street:string

    @Column({
        type: DataType.STRING,
        allowNull:false,       
    })
    city:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,

    })
    state:string;

    @BelongsTo(() => Person, 'pessoa_id')
    person:Person;
}