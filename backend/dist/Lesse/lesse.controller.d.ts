import { LesseService } from './lesse.service';
import { CreateLesseDto } from "./dto/Create.lesse.Dto";
import { CreateDealingHouseDto } from "./dto/Create.Dealing.house.dto";
import { User } from "@prisma/client";
export declare class LesseController {
    private lesseService;
    constructor(lesseService: LesseService);
    CreateDealing(lesseId: number, houseId: number, dealing: CreateDealingHouseDto): Promise<{
        houseId: number;
        lesseId: number;
        Is_deal: boolean;
        Is_report: boolean;
        Is_like: boolean;
    }>;
    CreateLesseProfile(authorId: User, dto: CreateLesseDto): Promise<import(".prisma/client").Lesse>;
}
