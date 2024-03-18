import { Injectable } from '@nestjs/common';
import { users } from "../../moks";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./models/user.model";
import * as bcrypt from "bcrypt"
import {CreateUserDTO} from "./dto";
@Injectable()
export class UserService {
    getUser(id: number) {
        return users[id];
    }

    constructor(@InjectModel(User) private readonly userRepository: typeof User) {}

    async hashPassword (password){
        return bcrypt.hash(password, 10);
    }
    async createUser(dto): Promise <CreateUserDTO> {
        dto.password = await this.hashPassword(dto.password);
        await this.userRepository.create(dto);
        return dto;
    }
}
