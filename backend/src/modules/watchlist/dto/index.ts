import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

/*Валидация данных, чтобы типы для записи в базу данных были правильные*/
export class WatchListDTO {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    assetId: string
}

