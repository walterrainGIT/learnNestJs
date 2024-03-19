import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./models/user.model";

@Module({
  imports: [SequelizeModule.forFeature([User])], //import модулей необходимых для работы текущего модуля
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
