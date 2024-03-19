import {Body, Controller, Post, Patch, Delete, UseGuards, Req} from '@nestjs/common';
import { UserService } from './user.service';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDTO, UpdateUserDTO} from "./dto";
import {UserLoginDTO} from "../auth/dto";
import {AuthUserResponse} from "../auth/response";
import {JwtAusGuard} from "../../guards/jwtGuard";
import {isEmail} from "class-validator";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiTags('API')
    @ApiResponse({status: 200, type: UpdateUserDTO})
    @UseGuards(JwtAusGuard)
    @Patch('updateUser')
    updateUser(@Body() dto: UpdateUserDTO, @Req() request): Promise<UpdateUserDTO> {
        const user = request.user;
        return this.userService.updateUser(user.email, dto);
    }

    @ApiTags('API')
    @ApiResponse({status: 200, type: undefined})
    @UseGuards(JwtAusGuard)
    @Delete('deleteUser')
    deleteUser(@Req() request) : Promise<boolean>{
        const user = request.user;
        return this.userService.deleteUser(user.email);
    }
}
