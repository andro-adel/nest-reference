"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = new Map();
    constructor() {
        this.create({
            email: 'admin@example.com',
            passwordHash: '$2b$10$Jz8yJjM/0bJq2qX1cX7qBe6yKp2z1g2v3u4Q5r6s7t8u9v0w1x2y2',
            roles: ['admin'],
            name: 'Admin User',
        });
    }
    findByEmail(email) {
        for (const u of this.users.values())
            if (u.email === email)
                return u;
        return undefined;
    }
    findById(id) {
        return this.users.get(id);
    }
    create(data) {
        const id = (this.users.size + 1).toString();
        const user = {
            id,
            email: data.email,
            passwordHash: data.passwordHash,
            roles: data.roles ?? ['user'],
            name: data.name,
        };
        this.users.set(id, user);
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
//# sourceMappingURL=users.service.js.map