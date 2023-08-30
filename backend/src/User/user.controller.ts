import { Controller, Get, UseGuards } from "@nestjs/common";

import { GetUser } from "../Auth/Decorators/house.admin";

import { User } from "@prisma/client";
import { AtGuards } from "../Auth/Guard/House.guard";

@Controller("pro")
export class UserController {
  @UseGuards(AtGuards)
  @Get("profile")
  getMe(@GetUser() authorId:User) {
    console.log(authorId);
    return authorId['sub'];
  }
}
