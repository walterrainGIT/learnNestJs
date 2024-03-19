import {BadRequestException, Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {CreateUserDTO} from "../user/dto";
import {AppError} from "../../common/constant/error";
import {UserLoginDTO} from "./dto";
import * as bcrypt from "bcrypt"
import {AuthUserResponse} from "./response";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async registerUsers(dto: CreateUserDTO) : Promise<CreateUserDTO> {
        //проверка существования пользователя и вывод ошибки из файла common/error
        const existUser = await this.userService.findUserByEmail(dto.email);
        if(existUser) throw new BadRequestException(AppError.USER_EXIST);//выводим ошибку с кодом 400, BadRequest
        return this.userService.createUser(dto);
    }

    async loginUser(dto: UserLoginDTO) : Promise<AuthUserResponse>{
        //проверка существования пользователя
        const existUser = await this.userService.findUserByEmail(dto.email);//ищем пользователя по email
        if(!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST);//выводим ошибку с кодом 400, BadRequest
        //хэшируем пароль и проводим его проверку на соответствие email-password
        const validatePassword = await bcrypt.compare(dto.password, existUser.password);
        if(!validatePassword) throw new BadRequestException(AppError.WRONG_LOGIN_DATA);//выводим ошибку с кодом 400, BadRequest
        return existUser;
    }
}