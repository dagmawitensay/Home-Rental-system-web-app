/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma/Prisma.service";
import { CreateLesseDto } from './dto/Create.lesse.Dto';
import { async } from "rxjs";
import { CreateDealingHouseDto } from './dto/Create.Dealing.house.dto';
import { CreateLesserDto } from '../Lesser/Dto/Create.Lesser.Dto';



@Injectable()
export class LesseService{
    constructor(private prisma:PrismaService){}
    async CreateDealing(lesseId:number,houseId:number,dealing:CreateDealingHouseDto) {
      let newLesse: { houseId: number; lesseId: number; Is_deal: boolean; Is_report: boolean; Is_like: boolean; };
      const interaction = await this.prisma.lesseOnHouse.findUnique({
        where: {
          houseId_lesseId: {
            lesseId,
            houseId,

          }
        }
      });
      
      
    
      



      if (interaction) {
        newLesse = await this.prisma.lesseOnHouse.update({
          where: {
            houseId_lesseId: {
              lesseId,
              houseId,

            }},
          data: {
            lesseId,
            houseId,
           ...dealing
         
          },
        }); 
      }
    else {
      newLesse = await this.prisma.lesseOnHouse.create({
        data: {
          lesseId,
          houseId,
         ...dealing
       
        },
      }); 

    }



    if (dealing.Is_deal && ((interaction && !interaction.Is_deal) || !interaction)) {
      const deal = await this.prisma.house.update({
        where: {
          id:houseId,
        },
        data: {
          deal: { increment: 1 },
        }
      
      });
        }
    if (dealing.Is_report && ((interaction && !interaction.Is_report) || !interaction)) {
      const report = await this.prisma.house.update({
        where: {
          id:houseId,
        },
        data: {
          report: { increment:1 },
        }
      
      });
      if (report.report == 5) {
        const del = await this.prisma.house.delete({
          where: {
            id: houseId,
          },
        })
      }
        }
    if (dealing.Is_like && ((interaction && !interaction.Is_like) || !interaction)) {
          const like = await this.prisma.house.update({
            where: {
              id:houseId,
            },
            data: {
              like: { increment: 1 },
            }
          
          });
            }
    else if(dealing.Is_like == false && interaction && interaction.Is_like) {
      const like = await this.prisma.house.update({
        where: {
          id:houseId,
        },
        data: {
          like: { decrement: 1 },
        }
      
      });
    }
    

      
  
      return newLesse;
    }

async CreateLesseProfile(authorId:number,dto:CreateLesseDto) {
    const newLesse = await this.prisma.lesse.create({
      data: {
        authorId,
        ...dto,
      },
    }); 

    return newLesse;
  }
async GetLesseProfile(authorId:number){
  return await this.prisma.lesse.findMany({
    where:{authorId}
  })
}



    
}