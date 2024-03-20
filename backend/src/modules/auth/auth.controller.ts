import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDTO} from "../user/dto";
import {UserLoginDTO} from "./dto";
import {AuthUserResponse} from "./response";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {JwtAusGuard} from "../../guards/jwtGuard";

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
    login(@Body() dto: UserLoginDTO) : Promise<any>{
        return this.authService.loginUser(dto);
    }
}
