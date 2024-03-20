import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {WatchList} from "../../watchlist/models/watchlist.model";

/*Создание таблицы и колонок в базе данных*/
@Table
export class User extends Model{
    @Column
    firstName: string

    @Column
    userName: string

    @Column
    email: string

    @Column
    password: string

    @HasMany(() => WatchList, { //Добавление отношений в таблицах, один ко многим
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    watchList: WatchList[]
}