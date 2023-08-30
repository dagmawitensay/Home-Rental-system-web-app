import { Module } from "@nestjs/common";
import { HouseController } from "./house.controller";
import { HouseService } from "./house.service";
import { PrismaModule } from '../Prisma/Prisma.module';

@Module({
    imports:[PrismaModule],
    controllers :[HouseController],
    providers:[HouseService]
})
export class HouseModule{}