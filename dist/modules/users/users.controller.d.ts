import { UsersService } from './users.service';
import type { User } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(dto: CreateUserDto): Promise<Omit<User, 'passwordHash'>>;
    profile(user: User): Promise<{
        id: string;
        email: string;
        roles: string[];
        name?: string;
    }>;
}
