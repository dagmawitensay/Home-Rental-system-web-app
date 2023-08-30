import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create.user.dto";
import { Tokens } from "./Type";
import { CreateLesserDto } from "src/Lesser/Dto/Create.Lesser.Dto";
import { CreateLesseDto } from "src/Lesse/dto/Create.lesse.Dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    LesserSignup(createDto: CreateUserDto, lesserDto: CreateLesserDto): Promise<Tokens>;
    LesseSignup(createDto: CreateUserDto, lesseDto: CreateLesseDto): Promise<Tokens>;
    Signin(createDto: CreateUserDto): Promise<Tokens>;
    logout(): string;
    refresh(): string;
}
