/* eslint-disable prettier/prettier */
import { User } from './../../node_modules/.prisma/client/index.d';
import { JwtService } from "@nestjs/jwt";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../Prisma/Prisma.service";
import { CreateUserDto } from "./dto/create.user.dto";
import * as bcrypt from "bcrypt";
import { Tokens } from "./Type";
import { Role } from "./Decorators/role.enum";
import { Roles } from './Decorators/role.auth';
import { CreateLesserDto } from '../Lesser/Dto/Create.Lesser.Dto';
import { CreateLesseDto } from 'src/Lesse/dto/Create.lesse.Dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}
  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }
  async GetToken(userId: number, username: string, role: string) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
          role,
        },

        { secret: "at-secret", expiresIn: 60 * 60 * 7  }
      ),

      this.jwtService.signAsync(
        {
          sub: userId,
          username,
          role,
        },
        { secret: "rt-secret", expiresIn: 60 *  60 * 7  }
      ),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
      role
    };
  }
  async UpdateRefreshHash(userId: number, rt: string) {
    const hash = await this.hashData(rt);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshPassword: hash,
      },
    });
  }

  async LesserSignup(createDto: CreateUserDto,lesserDto:CreateLesserDto): Promise<Tokens> {
    const hash = await this.hashData(createDto.Password);
    // const role=User.Roles
    const NewUser = await this.prisma.user.create({ 
      data: {
        User_Name: createDto.User_Name,
         
        hash: hash,
        role: 'LESSER',
        lesser:{
          create:{...lesserDto}
        }
      },
    });
   
    const tokens = await this.GetToken(
      NewUser.id,
      NewUser.User_Name,
      NewUser.role
    );
    await this.UpdateRefreshHash(NewUser.id, tokens.refresh_token);
    return tokens;
  }




    async LesseSignup(createDto: CreateUserDto,lesseDto:CreateLesseDto): Promise<Tokens> {
      const hash = await this.hashData(createDto.Password);
      // const role=User.Roles
      const NewUser = await this.prisma.user.create({ 
        data: {
          User_Name: createDto.User_Name,
           
          hash: hash,
          role: 'LESSE',
          lesse:{
            create:{...lesseDto}
          }
        },
      });
     

    // if (createDto.role === "LESSER") {
    //   const authorId: number = NewUser.id
    //   // console.log(me)
    //   const newLesser = await this.prisma.lesser.create({
    //     data: {
           
    //       authorId,
    //       ...createDto,
    //     },
      //  }); 
      
        
// }

    const tokens = await this.GetToken(
      NewUser.id,
      NewUser.User_Name,
      NewUser.role
    );
    await this.UpdateRefreshHash(NewUser.id, tokens.refresh_token);
    return tokens;
  }





  async Signin(createdto: CreateUserDto): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        User_Name: createdto.User_Name,
      },
      include: {
        lesse:{
          select:{id:true}
        },
        lesser:{
          select:{
            id:true
          }
        }
      }
    });
    if (!user) throw new ForbiddenException("access denied");
    const isMatch = await bcrypt.compare(createdto.Password, user.hash);

    if (!isMatch) throw new ForbiddenException("denied");

    const tokens = await this.GetToken(user.id, user.User_Name, user.role);
    await this.UpdateRefreshHash(user.id, tokens.refresh_token);
  return {Tokens:tokens,user:user};
  }
  logout() {
    return "logout";
  }
  refresh() {
    return "refresh";
  }
}
