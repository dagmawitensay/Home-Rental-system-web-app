import { PrismaService } from "../Prisma/Prisma.service";
import { CreateHouseDto } from "./dto/house.create.dto";
import { UpdateLeesserDto } from "../Lesser/Dto/Update.lesser.dto";
import { UpdateHouseDto } from './dto/Update.House.dto';
import { CreatePhoto } from "src/House_photo/dto/photo.create.dto";
import { House, Lesser } from "@prisma/client";
import { searchDto } from "./dto/searchDto";
export declare class HouseService {
    private prisma;
    constructor(prisma: PrismaService);
    GetAllHouseByAdmin(): Promise<(House & {
        lesser: Lesser;
        Home_Photo: {
            Door: string;
        };
    })[]>;
    GetHouseByIdAdmin(houseId: number): Promise<House & {
        lesser: Lesser;
        Home_Photo: import(".prisma/client").Home_Photo;
    }>;
    ApproveHouseById(houseId: number, dto: UpdateHouseDto): Promise<any>;
    CreateHouse(lesserId: number, dto: CreateHouseDto, photo: CreatePhoto): Promise<any>;
    GetAllHouseByLesser(lesserId: number): Promise<(House & {
        Home_Photo: {
            Door: string;
        };
    })[]>;
    GetDetailHouseByLesser(lesserId: number, houseId: number): Promise<House & {
        lesse: {
            Is_deal: boolean;
        }[];
        Home_Photo: import(".prisma/client").Home_Photo;
        _count: {
            lesse: number;
        };
    }>;
    UpdateHouseByIdLesser(lesserId: number, houseId: number, dto: UpdateLeesserDto): Promise<any>;
    GetAllHouseByAnyOne(query: searchDto): Promise<(House & {
        lesser: Lesser;
        Home_Photo: {
            Door: string;
        };
    })[]>;
    GetHouseById(houseId: number): Promise<House & {
        lesser: Lesser;
        lesse: import(".prisma/client").LesseOnHouse[];
        Home_Photo: import(".prisma/client").Home_Photo;
        _count: {
            lesse: number;
        };
    }>;
    DeleteHouseByLesser(lesserId: number, houseId: number): Promise<{
        message: string;
    }>;
}
