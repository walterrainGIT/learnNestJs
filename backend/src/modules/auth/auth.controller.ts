import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDTO} from "../user/dto";
import {UserLoginDTO} from "./dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthUserResponse} from "./response";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @ApiTags('API-user')
    @ApiResponse({status: 201, type: CreateUserDTO})
    @Post('register')
    register(@Body() dto: CreateUserDTO) : Promise<CreateUserDTO>{
        return this.authService.registerUsers(dto);
    }

    @ApiTags('API-user')
    @ApiResponse({status: 200, type: AuthUserResponse})
    @Post('login')
    login(@Body() dto: UserLoginDTO) : Promise<AuthUserResponse>{
        return this.authService.loginUser(dto);
    }
}
