export type User = {
    id: string;
    email: string;
    passwordHash: string;
    roles: string[];
    name?: string;
};
export declare class UsersService {
    private users;
    constructor();
    findByEmail(email: string): User | undefined;
    findById(id: string): User | undefined;
    create(data: {
        email: string;
        passwordHash: string;
        roles?: string[];
        name?: string;
    }): User;
}
