import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../Prisma/Prisma.service";
import { CreateUserDto } from "./dto/create.user.dto";
import { Tokens } from "./Type";
import { CreateLesserDto } from '../Lesser/Dto/Create.Lesser.Dto';
import { CreateLesseDto } from 'src/Lesse/dto/Create.lesse.Dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    hashData(data: string): Promise<string>;
    GetToken(userId: number, username: string, role: string): Promise<{
        access_token: string;
        refresh_token: string;
        role: string;
    }>;
    UpdateRefreshHash(userId: number, rt: string): Promise<void>;
    LesserSignup(createDto: CreateUserDto, lesserDto: CreateLesserDto): Promise<Tokens>;
    LesseSignup(createDto: CreateUserDto, lesseDto: CreateLesseDto): Promise<Tokens>;
    Signin(createdto: CreateUserDto): Promise<any>;
    logout(): string;
    refresh(): string;
}
