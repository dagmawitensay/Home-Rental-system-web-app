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
exports.LesseController = void 0;
const common_1 = require("@nestjs/common");
const lesse_service_1 = require("./lesse.service");
const house_admin_1 = require("../Auth/Decorators/house.admin");
const Create_lesse_Dto_1 = require("./dto/Create.lesse.Dto");
const Create_Dealing_house_dto_1 = require("./dto/Create.Dealing.house.dto");
const role_auth_1 = require("../Auth/Decorators/role.auth");
const role_enum_1 = require("../Auth/Decorators/role.enum");
const role_auth_guard_1 = require("../Auth/Guard/role.auth,guard");
const House_guard_1 = require("../Auth/Guard/House.guard");
let LesseController = class LesseController {
    constructor(lesseService) {
        this.lesseService = lesseService;
    }
    CreateDealing(lesseId, houseId, dealing) {
        return this.lesseService.CreateDealing(lesseId, houseId, dealing);
    }
    async CreateLesseProfile(authorId, dto) {
        return this.lesseService.CreateLesseProfile(authorId['sub'], dto);
    }
};
__decorate([
    (0, common_1.Patch)(':lesseId/house/:houseId'),
    __param(0, (0, common_1.Param)('lesseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('houseId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Create_Dealing_house_dto_1.CreateDealingHouseDto]),
    __metadata("design:returntype", void 0)
], LesseController.prototype, "CreateDealing", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, house_admin_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Create_lesse_Dto_1.CreateLesseDto]),
    __metadata("design:returntype", Promise)
], LesseController.prototype, "CreateLesseProfile", null);
LesseController = __decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.LESSE),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Controller)('lesse'),
    __metadata("design:paramtypes", [lesse_service_1.LesseService])
], LesseController);
exports.LesseController = LesseController;
//# sourceMappingURL=lesse.controller.js.map