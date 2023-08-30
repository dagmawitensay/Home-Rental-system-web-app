import { Module } from "@nestjs/common";
import { PrismaModule } from "src/Prisma/Prisma.module";
import { LesseController } from "./lesse.controller";
import { LesseService } from "./lesse.service";

@Module({
    imports:[PrismaModule],
    controllers:[LesseController],
    providers :[LesseService]

})
export class LesseModule {}