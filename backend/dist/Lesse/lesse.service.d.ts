import { PrismaService } from "src/Prisma/Prisma.service";
import { CreateLesseDto } from './dto/Create.lesse.Dto';
import { CreateDealingHouseDto } from './dto/Create.Dealing.house.dto';
export declare class LesseService {
    private prisma;
    constructor(prisma: PrismaService);
    CreateDealing(lesseId: number, houseId: number, dealing: CreateDealingHouseDto): Promise<{
        houseId: number;
        lesseId: number;
        Is_deal: boolean;
        Is_report: boolean;
        Is_like: boolean;
    }>;
    CreateLesseProfile(authorId: number, dto: CreateLesseDto): Promise<import(".prisma/client").Lesse>;
    GetLesseProfile(authorId: number): Promise<import(".prisma/client").Lesse[]>;
}
