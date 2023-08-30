import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/Prisma.service';
import { CreateLesserDto } from './Dto/Create.Lesser.Dto';
import { UpdateLeesserDto } from './Dto/Update.lesser.dto';

@Injectable()
export class LesserService {
  constructor(private prisma: PrismaService) {}

  async CreateLesser(authorId: number, dto: CreateLesserDto) {
    const newLesser = await this.prisma.lesser.create({
      data: {
        authorId,
        ...dto,
      },
    }); 

    return newLesser;
  }

  async GetLesser(authorId: number):Promise<any>{
    console.log(authorId, "in lesser");
    return await this.prisma.lesser.findMany({
      where:{

        authorId: authorId
      },
      include:{
        author:true
      }
    })
  }

  getLesserById(
    authorId: number,
    lesserId: number,
  ) {
    return this.prisma.lesser.findFirst({
      where: {
        id: lesserId,
        authorId,
      },
    });
  }







  async UpdateLesserById(
    authorId: number,
  //  lesserId: number,
    dto:UpdateLeesserDto
  ):Promise<any>{
    // get the bookmark by id
    const registration =
      await this.prisma.lesser.findUnique({
        where: {
          // id: lesserId,
          authorId
        },
      });
      
    // check if user owns the bookmark
    if (! registration|| registration.authorId !== authorId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.lesser.update({
      where: {
        authorId
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteLesserById(
    authorId: number,
    // lesserId: number,
  ):Promise<any> {
    const Lesser =
      await this.prisma.lesser.findUnique({
        where: {
         authorId
        },
      });

    // check if user owns the bookmark
    // if (!Lesser || Lesser.authorId !== authorId)
    //   throw new ForbiddenException(
    //     'Access to resources denied',
    //   );

    await this.prisma.lesser.delete({
      where: {
       
        authorId
      },
    });
  }




}
