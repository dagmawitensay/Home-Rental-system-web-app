"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseModule = void 0;
const common_1 = require("@nestjs/common");
const house_controller_1 = require("./house.controller");
const house_service_1 = require("./house.service");
const Prisma_module_1 = require("../Prisma/Prisma.module");
let HouseModule = class HouseModule {
};
HouseModule = __decorate([
    (0, common_1.Module)({
        imports: [Prisma_module_1.PrismaModule],
        controllers: [house_controller_1.HouseController],
        providers: [house_service_1.HouseService]
    })
], HouseModule);
exports.HouseModule = HouseModule;
//# sourceMappingURL=house.module.js.map