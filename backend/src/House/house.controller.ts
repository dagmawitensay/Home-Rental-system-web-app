/* eslint-disable prettier/prettier */
import { Request, query } from "express";
import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Req,
  ParseIntPipe,
  Param,
  Patch,
  Delete,
  UploadedFiles,
  UseInterceptors,
  Query,
} from "@nestjs/common";
import { HouseService } from "./house.service";
import { CreateHouseDto } from "./dto/house.create.dto";
import { GetUser } from "../Auth/Decorators/house.admin";
import { AtGuards } from "../Auth/Guard/House.guard";
import { Lesser, User } from "@prisma/client";
import { Role } from "../Auth/Decorators/role.enum";
import { RolesGuard } from "../Auth/Guard/role.auth,guard";
import { Roles } from "../Auth/Decorators/role.auth";
import { UpdateHouseDto } from './dto/Update.House.dto';
import { CreatePhoto } from '../House_photo/dto/photo.create.dto';
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ImageStorage } from '../House_photo/photo.storage';
import { searchDto } from "./dto/searchDto";

@Controller("house")
export class HouseController {
  constructor(private houseService: HouseService) {}


  //ADMIN ROLES
//get all unapproved houses
  @Roles(Role.ADMIN)
  @UseGuards(AtGuards, RolesGuard)
  @Get("admin")
  GetAllHouseByAdmin() {
    return this.houseService.GetAllHouseByAdmin();}
    //get all unapproved houses details
  @Roles(Role.ADMIN)
  @UseGuards(AtGuards, RolesGuard)
  @Get(":id/admin")
  getHouseByIdAdmin(@Param("id", ParseIntPipe) houseId: number) { 
    return this.houseService.GetHouseByIdAdmin(houseId);}

  @Roles(Role.ADMIN)
  @UseGuards(AtGuards, RolesGuard)
  @Patch(":id/admin")
  ApproveHouseById(@Param("id", ParseIntPipe) houseId: number,@Body() dto:UpdateHouseDto) {
    return this.houseService.ApproveHouseById(houseId,dto);
  }





 // LESSER ROLES
//CREATE HOUSES
  @Roles(Role.LESSER)
  @UseGuards(AtGuards, RolesGuard)
  @Post(":id")

  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: "toilet" },
        { name: "kitchen", maxCount: 1 },
        { name: "shower", maxCount: 1 },
        { name: "door", maxCount: 1 },
        { name: "floor", maxCount: 1 },
        { name: "roof", maxCount: 1 },
        { name: "wall", maxCount: 1 },
        { name: "licenses", maxCount: 1 },
      ],
      
      ImageStorage
    )
  )

  async CreateHouse(
    @Param("id", ParseIntPipe) lesserId: number,
    @Body() dto: CreateHouseDto,@Body() body,@UploadedFiles() file: Array<Express.Multer.File>) {
      body.Wall = `http://localhost:3336/housePhoto/${file["wall"][0].filename}`;
    body.Door = `http://localhost:3336/housePhoto/${file["door"][0].filename}`;
    body.Shower = `http://localhost:3336/housePhoto/${file["shower"][0].filename}`;
    body.Floor = `http://localhost:3336/housePhoto/${file["floor"][0].filename}`;
    body.Roof = `http://localhost:3336/housePhoto/${file["roof"][0].filename}`;
    body.Toilet = `http://localhost:3336/housePhoto/${file["toilet"][0].filename}`;
    body.Kitchen = `http://localhost:3336/housePhoto/${file["kitchen"][0].filename}`;
    body.Home_license = `http://localhost:3336/housePhoto/${file["licenses"][0].filename}`;

    return await this.houseService.CreateHouse(lesserId, dto,body);}

  // GET HIS HOUSE lists
  @Roles(Role.LESSER)
  @UseGuards(AtGuards, RolesGuard)
  @Get("/lesser/:id/")
  GetAllHouseByLesser(@Param("id", ParseIntPipe) lesserId: number) {
    return this.houseService.GetAllHouseByLesser(lesserId);
  }
  // get house details by lesser 
  @Roles(Role.LESSER)
  @UseGuards(AtGuards, RolesGuard)
  @Get(":idhome/lesser/:idlesser/")
  GetDetailHouseByLesser(@Param("idlesser", ParseIntPipe) lesserId: number,@Param('idhome',ParseIntPipe) houseId: number) {
    return this.houseService.GetDetailHouseByLesser(lesserId,houseId);
  }
  // updates house by lesser 
  @Roles(Role.LESSER)
  @UseGuards(AtGuards, RolesGuard)
  @Patch(":idhome/lesser/:idlesser")
  UpdateHouseByLesser(@Param("idlesser", ParseIntPipe) lesserId:number,@Param("idhome", ParseIntPipe) houseId:number,@Body() dto:UpdateHouseDto){
    return this.houseService.UpdateHouseByIdLesser(lesserId,houseId,dto);
  }

  // deletes house by lesser
  @Roles(Role.LESSER)
  @UseGuards(AtGuards, RolesGuard)
  @Delete(":idhome/lesser/:idlesser")
  DeleteHouseByLesser(@Param("idlesser", ParseIntPipe) lesserId: number,@Param('idhome',ParseIntPipe) houseId: number) {
    return this.houseService.DeleteHouseByLesser(lesserId,houseId);
  }




// LESSE ROLES


//Dealing Houses

//APPROVED HOUSES

   //  approved houses list
   @Get()
   GetAllHouseByAnyOne(@Query() query:searchDto) {
     return this.houseService.GetAllHouseByAnyOne(query);
   }
  //approved house Details

    @Roles(Role.LESSE)
  @UseGuards(AtGuards, RolesGuard)
  @Get(":idhome/lesse/:idlesse")
  getHouseById(@Param("idhome", ParseIntPipe) houseId: number,@Param("idlesse", ParseIntPipe) lesseId: number) {
    return this.houseService.GetHouseById(lesseId, houseId);
  }
}
