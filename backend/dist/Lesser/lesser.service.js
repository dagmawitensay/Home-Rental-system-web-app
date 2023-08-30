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
exports.LesserService = void 0;
const common_1 = require("@nestjs/common");
const Prisma_service_1 = require("../Prisma/Prisma.service");
let LesserService = class LesserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async CreateLesser(authorId, dto) {
        const newLesser = await this.prisma.lesser.create({
            data: Object.assign({ authorId }, dto),
        });
        return newLesser;
    }
    async GetLesser(authorId) {
        console.log(authorId, "in lesser");
        return await this.prisma.lesser.findMany({
            where: {
                authorId: authorId
            },
            include: {
                author: true
            }
        });
    }
    getLesserById(authorId, lesserId) {
        return this.prisma.lesser.findFirst({
            where: {
                id: lesserId,
                authorId,
            },
        });
    }
    async UpdateLesserById(authorId, dto) {
        const registration = await this.prisma.lesser.findUnique({
            where: {
                authorId
            },
        });
        if (!registration || registration.authorId !== authorId)
            throw new common_1.ForbiddenException('Access to resources denied');
        return this.prisma.lesser.update({
            where: {
                authorId
            },
            data: Object.assign({}, dto),
        });
    }
    async deleteLesserById(authorId) {
        const Lesser = await this.prisma.lesser.findUnique({
            where: {
                authorId
            },
        });
        await this.prisma.lesser.delete({
            where: {
                authorId
            },
        });
    }
};
LesserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Prisma_service_1.PrismaService])
], LesserService);
exports.LesserService = LesserService;
//# sourceMappingURL=lesser.service.js.map