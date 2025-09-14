import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import bcrypt from 'bcrypt';
import { IsEmail, IsString, MinLength } from 'class-validator';

class LoginDto {
  @IsEmail()
  email!: string;
  @IsString()
  @MinLength(6)
  password!: string;
}

class RegisterDto extends LoginDto {}

@ApiTags('auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly users: UsersService,
  ) {}

  @Post('login')
  async login(@Body() dto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.auth.validateUser(dto.email, dto.password);
    return this.auth.login(user);
  }

  @Post('register')
  async register(
    @Body() dto: RegisterDto,
  ): Promise<{ access_token: string } | { message: string }> {
    const existing = this.users.findByEmail(dto.email);
    if (existing) {
      return { message: 'User already exists' };
    }
    const passwordHash = await bcrypt.hash(dto.password, 10);
    const user = this.users.create({
      email: dto.email,
      passwordHash,
      roles: ['user'],
    });
    return this.auth.login(user);
  }
}
