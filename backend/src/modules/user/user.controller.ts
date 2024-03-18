import {Controller, Get} from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get('welcome-user')
    welcomeUser() {
        return this.userService.welcomeUser('Alex');
    }
    @Get('get-all-users')
    getUsers() {
        return this.userService.getUsers();
    }
}
