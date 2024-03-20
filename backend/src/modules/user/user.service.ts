import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./models/user.model";
import * as bcrypt from "bcrypt"
import {CreateUserDTO, UpdateUserDTO} from "./dto";
import {AppError} from "../../common/constant/error";
import {WatchList} from "../watchlist/models/watchlist.model";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly userRepository: typeof User) {}
    //хэширование пароля
    async hashPassword (password: string) : Promise<string>{
        try{
            return bcrypt.hash(password, 10);
        }catch (e){
            throw  new Error(e);
        }
    }
    //проверка существования email адреса в базе для уникальносьти
    async findUserByEmail(email: string) : Promise<User> {
        try{
            return this.userRepository.findOne({where: {email} });
        }catch (e){
            throw  new Error(e);
        }
    }

    //создание пользователя
    async createUser(dto: CreateUserDTO): Promise <CreateUserDTO> {
        try{
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
        }catch (e){
            throw  new Error(e);
        }
    }

    async publicUser(email: string) : Promise<User>{
        try{
            return this.userRepository.findOne({
                where: {email},
                attributes: {exclude: ['password']},
                include: {
                    model: WatchList,
                    required: false,
                }
            });
        }catch (e){
            throw  new Error(e);
        }
    }

    async updateUser(email: string, dto: UpdateUserDTO) : Promise<UpdateUserDTO>{
        try{
            await this.userRepository.update(dto, {where: {email}});
            return dto;
        }catch (e){
            throw  new Error(e);
        }
    }

    async deleteUser(email: string) : Promise<boolean>{
        try{
            await this.userRepository.destroy({where: {email}});
            return true
        }catch (e){
            throw  new Error(e);
        }
    }
}
