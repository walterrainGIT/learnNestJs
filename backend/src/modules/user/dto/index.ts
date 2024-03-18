import { IsString } from "class-validator";

/*Валидация данных, чтобы типы для записи в базу данных были правильные*/
export class CreateUserDTO{
    @IsString()
    firstName: string

    @IsString()
    userName: string

    @IsString()
    email: string

    @IsString()
    password: string
}