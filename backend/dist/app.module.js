"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./Auth/auth.module");
const Prisma_module_1 = require("./Prisma/Prisma.module");
const house_module_1 = require("./House/house.module");
const user_module_1 = require("./User/user.module");
const photo_module_1 = require("./House_photo/photo.module");
const Lesser_module_1 = require("./Lesser/Lesser.module");
const lesse_module_1 = require("./Lesse/lesse.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, Prisma_module_1.PrismaModule, house_module_1.HouseModule, user_module_1.UserModule, photo_module_1.PhotoModule, Lesser_module_1.LesserModule, lesse_module_1.LesseModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map