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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoService = void 0;
const common_1 = require("@nestjs/common");
const Prisma_service_1 = require("../Prisma/Prisma.service");
let PhotoService = class PhotoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async GetHouseById(houseId) {
        const findHouse = await this.prisma.house.findFirst({
            where: {
                id: houseId,
            },
        });
        return findHouse;
    }
    async CreatePhoto(houseId, photo) {
        const findHouse = await this.prisma.house.findFirst({
            where: { id: houseId },
        });
        if (!findHouse)
            throw new common_1.ForbiddenException("House is not found");
        const NewPhoto = await this.prisma.home_Photo.create({
            data: Object.assign({ houseId }, photo)
        });
        NewPhoto.houseId = findHouse.id;
        return NewPhoto;
    }
    async GetHousePhotoById(houseId) {
        const findHouse = await this.prisma.home_Photo.findMany({
            where: {
                houseId,
            },
        });
        return findHouse;
    }
};
PhotoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Prisma_service_1.PrismaService])
], PhotoService);
exports.PhotoService = PhotoService;
//# sourceMappingURL=Photo.service.js.map