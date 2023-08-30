import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { PrismaModule } from './Prisma/Prisma.module';
import { HouseModule } from './House/house.module';
import { UserModule } from './User/user.module';
import { PhotoModule } from './House_photo/photo.module';
import { LesserModule } from './Lesser/Lesser.module';
import { LesseModule } from './Lesse/lesse.module';

@Module({
  imports: [AuthModule,PrismaModule,HouseModule,UserModule,PhotoModule,LesserModule,LesseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
