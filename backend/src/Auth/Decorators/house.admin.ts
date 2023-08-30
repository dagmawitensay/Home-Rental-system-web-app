import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    // console.log(request.user['sub'], "here");
    if (!data) {
      return request.user
    }
   
    return request.user[data];
  }
);
