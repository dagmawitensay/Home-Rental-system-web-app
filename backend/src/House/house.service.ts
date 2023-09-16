/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../Prisma/Prisma.service";
import { CreateHouseDto } from "./dto/house.create.dto";
import { UpdateLeesserDto } from "../Lesser/Dto/Update.lesser.dto";
import { UpdateHouseDto } from './dto/Update.House.dto';
import { CreatePhoto } from "src/House_photo/dto/photo.create.dto";
import { House, Lesser } from "@prisma/client";
import { searchDto } from "./dto/searchDto";

@Injectable()
export class HouseService {
  constructor(private prisma: PrismaService) {}

  // ADMIN ROLES
  // get all unapproved houses lists
  async GetAllHouseByAdmin() {
    return await this.prisma.house.findMany({
      where: { Approval_status: false },
      include: {
        lesser:true,
        Home_Photo: {
          select: {
            Door: true,
          },
        },
      },
    });
  }
  // get unapproved houses details

  async GetHouseByIdAdmin(houseId: number) {
    const findHouse = await this.prisma.house.findFirst({
      where: {
       
        Approval_status: false,
        id: houseId,
      },
      include: {
        
        lesser:true,
        Home_Photo: true,
      },
    });
    if (!findHouse) throw new ForbiddenException("There are not unapproved houses")
    return findHouse;
  }

  //make approve houses

  async ApproveHouseById(
    houseId: number,
    dto: UpdateHouseDto
  ): Promise<any> {
    const isNotApproved= await this.prisma.house.findFirst({
      where:{ id:houseId,
        Approval_status:false}})

      if (!isNotApproved) throw new ForbiddenException("house is already approved")
    
    
    return this.prisma.house.update({
      where: {
        id: houseId,
       },
      data: {
        ...dto,
      },
    });
  }
  // LESSER ROLES

  // create houses by lesser
  async CreateHouse(lesserId: number, dto: CreateHouseDto,photo:CreatePhoto): Promise<any> {
    const findLesser = await this.prisma.lesser.findFirst({
      where: { id: lesserId },
    });

    if (!findLesser) throw new ForbiddenException("Lesser is not found");
    const NewHouse = await this.prisma.house.create({
      data: { lesserId, ...dto,
        Home_Photo:{
          create:{Wall:photo.Wall,
            Door:photo.Door,
            Floor:photo.Floor,
            Roof:photo.Roof,
            Toilet:photo.Toilet,
            Shower:photo.Shower,
            Kitchen:photo.Kitchen,
            Home_license:photo.Home_license

          }
        }
       },
    });
    NewHouse.lesserId = findLesser.id;
    return NewHouse;
  }

  //get all house lists by lesser

  async GetAllHouseByLesser(lesserId: number) {
    const LesserHouse = await this.prisma.house.findMany({
      where: { lesserId },
      include: {
      
        Home_Photo: {
          select: { Door: true },
        },
      },
    });

    return LesserHouse;
  }

  // get house details by lesser
  async GetDetailHouseByLesser(lesserId: number,houseId:number) {
    const Is_deal= await this.prisma.lesseOnHouse.count({
      where:{ Is_deal:true}
    })
    const houseLists = await this.prisma.house.findFirst({
      where: {
        id:houseId,
        lesserId,
      },
      include: {
      
        
      
        _count:{
          select:{
            
            lesse:true,
          }  
          },
        lesse:{
          select:{
            Is_deal:true
          }
        },
        Home_Photo: true 
      }
    });
    return houseLists;
  }
  
  //update houses by lesser
  async UpdateHouseByIdLesser(
    lesserId: number,
    houseId: number,
    dto: UpdateLeesserDto
  ): Promise<any> {
    
    const houseUpdate = await this.prisma.lesser.findUnique({
      where: {
      id:lesserId
      },
    });

    // check if user owns the houses
    if (!houseUpdate)
      throw new ForbiddenException("Access to resources denied");

    return this.prisma.house.update({
      where: {
        id: houseId,
      },
      data: {
        Approval_status: false,
        ...dto,
      },
    });
  }

  // delelete houses by lesser

  // LESSE ROLES

  // get all approved houses lists
  async GetAllHouseByAnyOne(query:searchDto) {
    let houseLists: (House & { lesser: Lesser; Home_Photo: { Door: string; }; })[];
    if (query) {
      houseLists = await this.prisma.house.findMany({
        where: {
          // Approval_status: true,
    
          Home_Type: query.Home_Type,
          Sub_City: query.location,
          // Price:{
          //   gt:query.min_price,
          //   lt: query.max_price
          // }
          
        },
        include: {
          lesser:true,
          Home_Photo: {
            select: {
              Door: true,
            },
          },
        },
      });

    }
    else {
      houseLists = await this.prisma.house.findMany({
        where: {
          Approval_status: true,
        },
        include: {
          lesser:true,
          Home_Photo: {
            select: {
              Door: true,
            },
          },
        },
      });

    }
    

    // if (!houseLists) throw new ForbiddenException("House not approved");

    return houseLists;
  }

  // get approved houses details

  async GetHouseById(lesseId:number, houseId: number) {
    const findHouse = await this.prisma.house.findFirst({
      where: {
        Approval_status: true,
        id: houseId,
        
      },
      
      
      include: {

        
        _count:{
        
        select:{
          lesse:true
        }  
        },
        // lesse:{
        //   where:{lesseId},
        
        // },
        lesse:true,
        lesser:true,
        Home_Photo: true,
      },
    });
    return findHouse;
  }

  
  
  
  async DeleteHouseByLesser(lesserId:number,houseId:number) {
    const houseDelete= await this.prisma.house.findFirst({
      where:{
        lesserId,
        id:houseId
      }
    })
    if (!houseDelete) throw new ForbiddenException(" No Deleted house found")

    await this.prisma.house.delete({
      where:{ id:houseId}
    })
    return {message:`house id number ${houseId} successfully deleted`};

  }




  
}
