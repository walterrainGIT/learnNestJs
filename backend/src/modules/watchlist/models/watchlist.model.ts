import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../../user/models/user.model";

/*Создание таблицы и колонок в базе данных*/
@Table
export class WatchList extends Model{
    @ForeignKey(() => User)
    user: User

    @Column
    name: string

    @Column
    assetId: string
}