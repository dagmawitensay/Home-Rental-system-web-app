/// <reference types="multer" />
import { HouseService } from "./house.service";
import { CreateHouseDto } from "./dto/house.create.dto";
import { Lesser } from "@prisma/client";
import { UpdateHouseDto } from './dto/Update.House.dto';
import { searchDto } from "./dto/searchDto";
export declare class HouseController {
    private houseService;
    constructor(houseService: HouseService);
    GetAllHouseByAdmin(): Promise<(import(".prisma/client").House & {
        lesser: Lesser;
        Home_Photo: {
            Door: string;
        };
    })[]>;
    getHouseByIdAdmin(houseId: number): Promise<import(".prisma/client").House & {
        lesser: Lesser;
        Home_Photo: import(".prisma/client").Home_Photo;
    }>;
    ApproveHouseById(houseId: number, dto: UpdateHouseDto): Promise<any>;
    CreateHouse(lesserId: number, dto: CreateHouseDto, body: any, file: Array<Express.Multer.File>): Promise<any>;
    GetAllHouseByLesser(lesserId: number): Promise<(import(".prisma/client").House & {
        Home_Photo: {
            Door: string;
        };
    })[]>;
    GetDetailHouseByLesser(lesserId: number, houseId: number): Promise<import(".prisma/client").House & {
        Home_Photo: import(".prisma/client").Home_Photo;
        _count: {
            lesse: number;
        };
        lesse: {
            Is_deal: boolean;
        }[];
    }>;
    UpdateHouseByLesser(lesserId: number, houseId: number, dto: UpdateHouseDto): Promise<any>;
    DeleteHouseByLesser(lesserId: number, houseId: number): Promise<{
        message: string;
    }>;
    GetAllHouseByAnyOne(query: searchDto): Promise<(import(".prisma/client").House & {
        lesser: Lesser;
        Home_Photo: {
            Door: string;
        };
    })[]>;
    getHouseById(houseId: number): Promise<import(".prisma/client").House & {
        lesser: Lesser;
        Home_Photo: import(".prisma/client").Home_Photo;
        _count: {
            lesse: number;
        };
        lesse: import(".prisma/client").LesseOnHouse[];
    }>;
}
