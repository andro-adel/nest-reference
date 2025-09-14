import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
declare class LoginDto {
    email: string;
    password: string;
}
declare class RegisterDto extends LoginDto {
}
export declare class AuthController {
    private readonly auth;
    private readonly users;
    constructor(auth: AuthService, users: UsersService);
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    register(dto: RegisterDto): Promise<{
        access_token: string;
    } | {
        message: string;
    }>;
}
export {};
