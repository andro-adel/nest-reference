export type RequestUser = {
    userId: string;
    email: string;
    roles: string[];
};
export declare const GetUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
