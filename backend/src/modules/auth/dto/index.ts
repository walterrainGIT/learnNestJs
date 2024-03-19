import { IsString } from "class-validator";

/*Валидация данных, чтобы типы для записи в базу данных были правильные*/
export class UserLoginDTO{
    @IsString()
    email: string

    @IsString()
    password: string
}

