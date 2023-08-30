
// import { Role } from '@prisma/client';
import { Role } from '../Auth/Decorators/role.enum';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { LesserService } from "./lesser.service";
import { CreateLesserDto } from "./Dto/Create.Lesser.Dto";
import {  GetUser } from '../Auth/Decorators/house.admin';

import { AtGuards } from "../Auth/Guard/House.guard";
import { User, Lesser } from '@prisma/client';
import { Roles } from "../Auth/Decorators/role.auth";
// import { Role } from '../Auth/Decorators/role.enum';
import { RolesGuard } from '../Auth/Guard/role.auth,guard';

@Roles(Role.LESSER)

@UseGuards(AtGuards,RolesGuard)
@Controller("lesser")
export class LesserController {
  constructor(private lesserService: LesserService) {}

 
 
  @Post()
  CreateLesser(@GetUser() authorId:User, @Body() dto: CreateLesserDto) {
    return this.lesserService.CreateLesser(authorId['sub'], dto);
  }
 
  @Get()
  GetLesser(@GetUser() authorId:Lesser):Promise<any> {
    return this.lesserService.GetLesser(authorId.id);
  } 
 
  @Get(":id")
  getLesserById(
    @GetUser("id") authorid: number,
    @Param("id", ParseIntPipe) lesserId: number
  ) {
    return this.lesserService.getLesserById(authorid, lesserId);
  }

 
  @Patch()
  UpdatLessereById(
    @GetUser() authorId: User,
    // @Param("id", ParseIntPipe) lesserId: number,
    @Body() dto: CreateLesserDto
  ): Promise<any> {
    return this.lesserService.UpdateLesserById(authorId["sub"], dto);
  }
 
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  deleteLesserById(
    @GetUser() authorId: User,
    // @Param("id", ParseIntPipe) lesserId: number
  ): Promise<any> {
    // const authorId:number=author.id;
    return this.lesserService.deleteLesserById(authorId["sub"]);
  }
}
