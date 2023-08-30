import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create.user.dto";
import { Tokens } from "./Type";
import { CreateLesserDto } from "src/Lesser/Dto/Create.Lesser.Dto";
import { CreateLesseDto } from "src/Lesse/dto/Create.lesse.Dto";

@Controller("user")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("lesser/signup")
  LesserSignup(@Body() createDto: CreateUserDto,@Body() lesserDto:CreateLesserDto): Promise<Tokens> {
    return this.authService.LesserSignup(createDto,lesserDto);
  }
  @Post("lesse/signup")
  LesseSignup(@Body() createDto: CreateUserDto,@Body() lesseDto:CreateLesseDto): Promise<Tokens> {
    return this.authService.LesseSignup(createDto,lesseDto);
  }
  @Post("signin")
  Signin(@Body() createDto: CreateUserDto): Promise<Tokens> {
    return this.authService.Signin(createDto);
  }
  @Post("logout")
  logout() {
    return this.authService.logout();
  }
  @Post("refresh")
  refresh() {
    return this.authService.refresh();
  }
}
