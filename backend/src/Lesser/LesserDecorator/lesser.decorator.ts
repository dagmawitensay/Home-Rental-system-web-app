import { Lesser } from '@prisma/client';
import { createParamDecorator, ExecutionContext, Injectable } from "@nestjs/common";
import { PrismaService } from '../../Prisma/Prisma.service';


export const GetLesserId = createParamDecorator(
    
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    // if (!data) {
    //   return request.user
    // }
    let prisma: PrismaService  = new PrismaService;
    const id = request.user['sub'];
     const result = prisma.lesser.findUnique({
        where:{
            authorId: id,
        }
  });
  console.log(result);
    

    return result;
  }
);
