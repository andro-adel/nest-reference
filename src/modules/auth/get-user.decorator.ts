import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type RequestUser = {
  userId: string;
  email: string;
  roles: string[];
};

export const GetUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): RequestUser => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as RequestUser;
  },
);
