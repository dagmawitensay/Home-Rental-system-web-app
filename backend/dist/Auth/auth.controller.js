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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_user_dto_1 = require("./dto/create.user.dto");
const Create_Lesser_Dto_1 = require("../Lesser/Dto/Create.Lesser.Dto");
const Create_lesse_Dto_1 = require("../Lesse/dto/Create.lesse.Dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    LesserSignup(createDto, lesserDto) {
        return this.authService.LesserSignup(createDto, lesserDto);
    }
    LesseSignup(createDto, lesseDto) {
        return this.authService.LesseSignup(createDto, lesseDto);
    }
    Signin(createDto) {
        return this.authService.Signin(createDto);
    }
    logout() {
        return this.authService.logout();
    }
    refresh() {
        return this.authService.refresh();
    }
};
__decorate([
    (0, common_1.Post)("lesser/signup"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Create_Lesser_Dto_1.CreateLesserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "LesserSignup", null);
__decorate([
    (0, common_1.Post)("lesse/signup"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Create_lesse_Dto_1.CreateLesseDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "LesseSignup", null);
__decorate([
    (0, common_1.Post)("signin"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Signin", null);
__decorate([
    (0, common_1.Post)("logout"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)("refresh"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
AuthController = __decorate([
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map