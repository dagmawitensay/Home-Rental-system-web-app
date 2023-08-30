import { Module } from "@nestjs/common";
import { PrismaModule } from "src/Prisma/Prisma.module";
import { AuthService } from './auth.service';
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AtStrategy } from "./strategy/AtStrategy";
import { RtStrategy } from "./strategy/RtStrategy";
import { RolesGuard } from './Guard/role.auth,guard';

@Module({
    imports :[PrismaModule,JwtModule.register({})],
    controllers:[AuthController],
    providers:[AuthService,AtStrategy,RtStrategy,RolesGuard],
    exports:[AuthService]

})
export class AuthModule {}