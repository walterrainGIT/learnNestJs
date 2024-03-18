import { Injectable } from '@nestjs/common';
import { users } from "../../moks";

@Injectable()
export class UserService {
    getUsers() {
        return users;
    }

    welcomeUser(userName : string) {
        return `Welcome you - ${userName}`;
    }
}
