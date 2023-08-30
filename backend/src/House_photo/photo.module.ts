import { Module } from '@nestjs/common';
import { PhotoController } from './photo.Controller';
import { PhotoService } from './Photo.service';
import { PrismaModule } from 'src/Prisma/Prisma.module';


@Module({
    imports:[PrismaModule],
    controllers:[PhotoController],
    providers :[PhotoService]
})
export class PhotoModule {}