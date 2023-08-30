import { Module } from "@nestjs/common";
import { PrismaService } from './Prisma.service';

@Module({
    providers :[PrismaService],
    exports:[PrismaService]
})
export class PrismaModule{}