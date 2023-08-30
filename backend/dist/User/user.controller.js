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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const house_admin_1 = require("../Auth/Decorators/house.admin");
const House_guard_1 = require("../Auth/Guard/House.guard");
let UserController = class UserController {
    getMe(authorId) {
        console.log(authorId);
        return authorId['sub'];
    }
};
__decorate([
    (0, common_1.UseGuards)(House_guard_1.AtGuards),
    (0, common_1.Get)("profile"),
    __param(0, (0, house_admin_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getMe", null);
UserController = __decorate([
    (0, common_1.Controller)("pro")
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map