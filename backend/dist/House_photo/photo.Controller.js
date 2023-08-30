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
exports.PhotoController = void 0;
const common_1 = require("@nestjs/common");
const Photo_service_1 = require("./Photo.service");
const platform_express_1 = require("@nestjs/platform-express");
const photo_create_dto_1 = require("./dto/photo.create.dto");
const photo_storage_1 = require("./photo.storage");
const rxjs_1 = require("rxjs");
let PhotoController = class PhotoController {
    constructor(photo) {
        this.photo = photo;
    }
    GetHousePhotoById(houseId) {
        return this.photo.GetHousePhotoById(houseId);
    }
    CreatePhoto(houseId, photo) {
        return this.photo.CreatePhoto(houseId, photo);
    }
    uploadFile(houseId, body, file) {
        body.Wall = `http://localhost:3336/housePhoto/${file["wall"][0].filename}`;
        body.Door = `http://localhost:3336/housePhoto/${file["door"][0].filename}`;
        body.Shower = `http://localhost:3336/housePhoto/${file["shower"][0].filename}`;
        body.Floor = `http://localhost:3336/housePhoto/${file["floor"][0].filename}`;
        body.Roof = `http://localhost:3336/housePhoto/${file["roof"][0].filename}`;
        body.Toilet = `http://localhost:3336/housePhoto/${file["toilet"][0].filename}`;
        body.Kitchen = `http://localhost:3336/housePhoto/${file["kitchen"][0].filename}`;
        body.Home_license = `http://localhost:3336/housePhoto/${file["licenses"][0].filename}`;
        return this.photo.CreatePhoto(houseId, body);
    }
    GetImage(image, res) {
        return (0, rxjs_1.of)(res.sendFile(image, { root: './House_photos' }));
    }
};
__decorate([
    (0, common_1.Get)(":id/photo"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PhotoController.prototype, "GetHousePhotoById", null);
__decorate([
    (0, common_1.Post)(":id/image"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, photo_create_dto_1.CreatePhoto]),
    __metadata("design:returntype", void 0)
], PhotoController.prototype, "CreatePhoto", null);
__decorate([
    (0, common_1.Post)(":id/"),
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
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Array]),
    __metadata("design:returntype", void 0)
], PhotoController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(":image"),
    __param(0, (0, common_1.Param)("image", common_1.ParseFilePipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], PhotoController.prototype, "GetImage", null);
PhotoController = __decorate([
    (0, common_1.Controller)("housePhoto"),
    __metadata("design:paramtypes", [Photo_service_1.PhotoService])
], PhotoController);
exports.PhotoController = PhotoController;
//# sourceMappingURL=photo.Controller.js.map