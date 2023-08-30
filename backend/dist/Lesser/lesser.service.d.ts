import { PrismaService } from 'src/Prisma/Prisma.service';
import { CreateLesserDto } from './Dto/Create.Lesser.Dto';
import { UpdateLeesserDto } from './Dto/Update.lesser.dto';
export declare class LesserService {
    private prisma;
    constructor(prisma: PrismaService);
    CreateLesser(authorId: number, dto: CreateLesserDto): Promise<import(".prisma/client").Lesser>;
    GetLesser(authorId: number): Promise<any>;
    getLesserById(authorId: number, lesserId: number): import(".prisma/client").Prisma.Prisma__LesserClient<import(".prisma/client").Lesser, never>;
    UpdateLesserById(authorId: number, dto: UpdateLeesserDto): Promise<any>;
    deleteLesserById(authorId: number): Promise<any>;
}
