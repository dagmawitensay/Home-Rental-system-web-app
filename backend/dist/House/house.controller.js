"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseController = void 0;
const common_1 = require("@nestjs/common");
const house_service_1 = require("./house.service");
const house_create_dto_1 = require("./dto/house.create.dto");
const House_guard_1 = require("../Auth/Guard/House.guard");
const role_enum_1 = require("../Auth/Decorators/role.enum");
const role_auth_guard_1 = require("../Auth/Guard/role.auth,guard");
const role_auth_1 = require("../Auth/Decorators/role.auth");
const Update_House_dto_1 = require("./dto/Update.House.dto");
const platform_express_1 = require("@nestjs/platform-express");
const photo_storage_1 = require("../House_photo/photo.storage");
const searchDto_1 = require("./dto/searchDto");
let HouseController = class HouseController {
    constructor(houseService) {
        this.houseService = houseService;
    }
    GetAllHouseByAdmin() {
        return this.houseService.GetAllHouseByAdmin();
    }
    getHouseByIdAdmin(houseId) {
        return this.houseService.GetHouseByIdAdmin(houseId);
    }
    ApproveHouseById(houseId, dto) {
        return this.houseService.ApproveHouseById(houseId, dto);
    }
    async CreateHouse(lesserId, dto, body, file) {
        body.Wall = `http://localhost:3336/housePhoto/${file["wall"][0].filename}`;
        body.Door = `http://localhost:3336/housePhoto/${file["door"][0].filename}`;
        body.Shower = `http://localhost:3336/housePhoto/${file["shower"][0].filename}`;
        body.Floor = `http://localhost:3336/housePhoto/${file["floor"][0].filename}`;
        body.Roof = `http://localhost:3336/housePhoto/${file["roof"][0].filename}`;
        body.Toilet = `http://localhost:3336/housePhoto/${file["toilet"][0].filename}`;
        body.Kitchen = `http://localhost:3336/housePhoto/${file["kitchen"][0].filename}`;
        body.Home_license = `http://localhost:3336/housePhoto/${file["licenses"][0].filename}`;
        return await this.houseService.CreateHouse(lesserId, dto, body);
    }
    GetAllHouseByLesser(lesserId) {
        return this.houseService.GetAllHouseByLesser(lesserId);
    }
    GetDetailHouseByLesser(lesserId, houseId) {
        return this.houseService.GetDetailHouseByLesser(lesserId, houseId);
    }
    UpdateHouseByLesser(lesserId, houseId, dto) {
        return this.houseService.UpdateHouseByIdLesser(lesserId, houseId, dto);
    }
    DeleteHouseByLesser(lesserId, houseId) {
        return this.houseService.DeleteHouseByLesser(lesserId, houseId);
    }
    GetAllHouseByAnyOne(query) {
        return this.houseService.GetAllHouseByAnyOne(query);
    }
    getHouseById(houseId, lesseId) {
        return this.houseService.GetHouseById(lesseId, houseId);
    }
};
__decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Get)("admin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "GetAllHouseByAdmin", null);
__decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Get)(":id/admin"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "getHouseByIdAdmin", null);
__decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Patch)(":id/admin"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Update_House_dto_1.UpdateHouseDto]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "ApproveHouseById", null);
__decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.LESSER),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Post)(":id"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: "toilet" },
        { name: "kitchen", maxCount: 1 },
        { name: "shower", maxCount: 1 },
        { name: "door", maxCount: 1 },
        { name: "floor", maxCount: 1 },
        { name: "roof", maxCount: 1 },
        { name: "wall", maxCount: 1 },
        { name: "licenses", maxCount: 1 },
    ], photo_storage_1.ImageStorage)),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, house_create_dto_1.CreateHouseDto, Object, Array]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "CreateHouse", null);
__decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.LESSER),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Get)("/lesser/:id/"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "GetAllHouseByLesser", null);
__decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.LESSER),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Get)(":idhome/lesser/:idlesser/"),
    __param(0, (0, common_1.Param)("idlesser", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idhome', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "GetDetailHouseByLesser", null);
__decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.LESSER),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Patch)(":idhome/lesser/:idlesser"),
    __param(0, (0, common_1.Param)("idlesser", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("idhome", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Update_House_dto_1.UpdateHouseDto]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "UpdateHouseByLesser", null);
__decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.LESSER),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Delete)(":idhome/lesser/:idlesser"),
    __param(0, (0, common_1.Param)("idlesser", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idhome', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "DeleteHouseByLesser", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [searchDto_1.searchDto]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "GetAllHouseByAnyOne", null);
__decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.LESSE),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Get)(":idhome/lesse/:idlesse"),
    __param(0, (0, common_1.Param)("idhome", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("idlesse", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "getHouseById", null);
HouseController = __decorate([
    (0, common_1.Controller)("house"),
    __metadata("design:paramtypes", [house_service_1.HouseService])
], HouseController);
exports.HouseController = HouseController;
//# sourceMappingURL=house.controller.js.map