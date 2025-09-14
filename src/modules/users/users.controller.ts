import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import type { User } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import * as bcrypt from 'bcrypt';

@ApiTags('users')
@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(
    @Body() dto: CreateUserDto,
  ): Promise<Omit<User, 'passwordHash'>> {
    const hash = await bcrypt.hash(dto.password, 10);
    const user = this.usersService.create({
      email: dto.email,
      passwordHash: hash,
      roles: ['user'],
      name: dto.name,
    });
    const { passwordHash: _ignored, ...rest } = user;
    return rest;
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@GetUser() user: User) {
    const { passwordHash: _ignored, ...rest } = user;
    return rest;
  }
}
