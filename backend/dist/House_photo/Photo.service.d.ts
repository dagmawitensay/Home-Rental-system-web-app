import { PrismaService } from "src/Prisma/Prisma.service";
import { CreatePhoto } from './dto/photo.create.dto';
export declare class PhotoService {
    private prisma;
    constructor(prisma: PrismaService);
    GetHouseById(houseId: number): Promise<import(".prisma/client").House>;
    CreatePhoto(houseId: number, photo: CreatePhoto): Promise<import(".prisma/client").Home_Photo>;
    GetHousePhotoById(houseId: number): Promise<import(".prisma/client").Home_Photo[]>;
}
