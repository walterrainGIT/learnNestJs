import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateAssetResponse {
    @ApiProperty()
    @IsString()
    user: string

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    assetId: string
}