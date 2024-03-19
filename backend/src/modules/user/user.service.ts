import {BadRequestException, Injectable} from '@nestjs/common';
import { users } from "../../moks";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./models/user.model";
import * as bcrypt from "bcrypt"
import {CreateUserDTO} from "./dto";
import {AppError} from "../../common/constant/error";

@Injectable()
export class UserService {
    getUser(id: number) {
        return users[id];
    }

    constructor(@InjectModel(User) private readonly userRepository: typeof User) {}
    //хэширование пароля
    async hashPassword (password){
        return bcrypt.hash(password, 10);
    }
    //проверка существования email адреса в базе для уникальносьти
    async findUserByEmail(email: string) {
        return this.userRepository.findOne({where: {email} });
    }

    //создание пользователя
    async createUser(dto: CreateUserDTO): Promise <CreateUserDTO> {
        //хэшируем пароль
        dto.password = await this.hashPassword(dto.password);
        //создаем пользователя после валидации данных в dto
        await this.userRepository.create({
            firstName: dto.firstName,
            userName: dto.userName,
            email: dto.email,
            password: dto.password,
        });
        return dto;
    }
}
