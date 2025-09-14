import { Injectable } from '@nestjs/common';

export type User = {
  id: string;
  email: string;
  passwordHash: string;
  roles: string[];
  name?: string;
};

@Injectable()
export class UsersService {
  private users = new Map<string, User>();

  constructor() {
    // seed with a demo user (password: password)
    this.create({
      email: 'admin@example.com',
      passwordHash:
        '$2b$10$Jz8yJjM/0bJq2qX1cX7qBe6yKp2z1g2v3u4Q5r6s7t8u9v0w1x2y2',
      roles: ['admin'],
      name: 'Admin User',
    });
  }

  findByEmail(email: string): User | undefined {
    for (const u of this.users.values()) if (u.email === email) return u;
    return undefined;
  }

  findById(id: string): User | undefined {
    return this.users.get(id);
  }

  create(data: {
    email: string;
    passwordHash: string;
    roles?: string[];
    name?: string;
  }): User {
    const id = (this.users.size + 1).toString();
    const user: User = {
      id,
      email: data.email,
      passwordHash: data.passwordHash,
      roles: data.roles ?? ['user'],
      name: data.name,
    };
    this.users.set(id, user);
    return user;
  }
}
