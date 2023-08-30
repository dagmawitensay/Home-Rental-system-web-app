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
exports.LesserController = void 0;
const role_enum_1 = require("../Auth/Decorators/role.enum");
const common_1 = require("@nestjs/common");
const lesser_service_1 = require("./lesser.service");
const Create_Lesser_Dto_1 = require("./Dto/Create.Lesser.Dto");
const house_admin_1 = require("../Auth/Decorators/house.admin");
const House_guard_1 = require("../Auth/Guard/House.guard");
const role_auth_1 = require("../Auth/Decorators/role.auth");
const role_auth_guard_1 = require("../Auth/Guard/role.auth,guard");
let LesserController = class LesserController {
    constructor(lesserService) {
        this.lesserService = lesserService;
    }
    CreateLesser(authorId, dto) {
        return this.lesserService.CreateLesser(authorId['sub'], dto);
    }
    GetLesser(authorId) {
        return this.lesserService.GetLesser(authorId.id);
    }
    getLesserById(authorid, lesserId) {
        return this.lesserService.getLesserById(authorid, lesserId);
    }
    UpdatLessereById(authorId, dto) {
        return this.lesserService.UpdateLesserById(authorId["sub"], dto);
    }
    deleteLesserById(authorId) {
        return this.lesserService.deleteLesserById(authorId["sub"]);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, house_admin_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Create_Lesser_Dto_1.CreateLesserDto]),
    __metadata("design:returntype", void 0)
], LesserController.prototype, "CreateLesser", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, house_admin_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LesserController.prototype, "GetLesser", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, house_admin_1.GetUser)("id")),
    __param(1, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], LesserController.prototype, "getLesserById", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, house_admin_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Create_Lesser_Dto_1.CreateLesserDto]),
    __metadata("design:returntype", Promise)
], LesserController.prototype, "UpdatLessereById", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Delete)(),
    __param(0, (0, house_admin_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LesserController.prototype, "deleteLesserById", null);
LesserController = __decorate([
    (0, role_auth_1.Roles)(role_enum_1.Role.LESSER),
    (0, common_1.UseGuards)(House_guard_1.AtGuards, role_auth_guard_1.RolesGuard),
    (0, common_1.Controller)("lesser"),
    __metadata("design:paramtypes", [lesser_service_1.LesserService])
], LesserController);
exports.LesserController = LesserController;
//# sourceMappingURL=Lesser.Controller.js.map