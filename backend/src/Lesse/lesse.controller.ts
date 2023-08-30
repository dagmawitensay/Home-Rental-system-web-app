import { Body, Controller, Get, Param, ParseIntPipe,Put, Post, UseGuards, Patch } from "@nestjs/common";
import { LesseService } from './lesse.service';
import { GetUser } from '../Auth/Decorators/house.admin';
import { CreateLesseDto } from "./dto/Create.lesse.Dto";
import { CreateDealingHouseDto } from "./dto/Create.Dealing.house.dto";
import { Roles } from '../Auth/Decorators/role.auth';
import { Role } from '../Auth/Decorators/role.enum';
import { RolesGuard } from "src/Auth/Guard/role.auth,guard";
import { AtGuards } from "src/Auth/Guard/House.guard";
import { User } from "@prisma/client";
@Roles(Role.LESSE)

@UseGuards(AtGuards,RolesGuard)
@Controller('lesse')
export class LesseController{
    constructor(private lesseService:LesseService){}
    @Patch(':lesseId/house/:houseId')
    CreateDealing(@Param('lesseId',ParseIntPipe) lesseId:number,@Param('houseId',ParseIntPipe) houseId:number,@Body() dealing:CreateDealingHouseDto){
        return this.lesseService. CreateDealing(lesseId,houseId, dealing);
    }

@Post()
async CreateLesseProfile(@GetUser() authorId:User,@Body() dto:CreateLesseDto) {
    return this.lesseService.CreateLesseProfile(authorId['sub'],dto)
}


}