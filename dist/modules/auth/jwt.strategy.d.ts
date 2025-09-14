import { ConfigService } from '@nestjs/config';
export type JwtPayload = {
    sub: string;
    email: string;
    roles: string[];
};
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(config: ConfigService);
    validate(payload: JwtPayload): Promise<{
        userId: string;
        email: string;
        roles: string[];
    }>;
}
export {};
