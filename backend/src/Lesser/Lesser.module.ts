import { Module } from "@nestjs/common";
import { PrismaModule } from "src/Prisma/Prisma.module";
import { LesserController } from "./Lesser.Controller";
import { LesserService } from "./lesser.service";
import { AuthModule } from '../Auth/auth.module';

@Module({
    imports:[PrismaModule,AuthModule],
    controllers:[LesserController],
    providers:[LesserService]

})
export class LesserModule {}