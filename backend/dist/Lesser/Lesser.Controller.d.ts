import { LesserService } from "./lesser.service";
import { CreateLesserDto } from "./Dto/Create.Lesser.Dto";
import { User, Lesser } from '@prisma/client';
export declare class LesserController {
    private lesserService;
    constructor(lesserService: LesserService);
    CreateLesser(authorId: User, dto: CreateLesserDto): Promise<Lesser>;
    GetLesser(authorId: Lesser): Promise<any>;
    getLesserById(authorid: number, lesserId: number): import(".prisma/client").Prisma.Prisma__LesserClient<Lesser, never>;
    UpdatLessereById(authorId: User, dto: CreateLesserDto): Promise<any>;
    deleteLesserById(authorId: User): Promise<any>;
}
