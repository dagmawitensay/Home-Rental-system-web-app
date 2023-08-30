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
exports.LesseService = void 0;
const common_1 = require("@nestjs/common");
const Prisma_service_1 = require("../Prisma/Prisma.service");
let LesseService = class LesseService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async CreateDealing(lesseId, houseId, dealing) {
        let newLesse;
        const interaction = await this.prisma.lesseOnHouse.findUnique({
            where: {
                houseId_lesseId: {
                    lesseId,
                    houseId,
                }
            }
        });
        if (interaction) {
            newLesse = await this.prisma.lesseOnHouse.update({
                where: {
                    houseId_lesseId: {
                        lesseId,
                        houseId,
                    }
                },
                data: Object.assign({ lesseId,
                    houseId }, dealing),
            });
        }
        else {
            newLesse = await this.prisma.lesseOnHouse.create({
                data: Object.assign({ lesseId,
                    houseId }, dealing),
            });
        }
        if (dealing.Is_deal && ((interaction && !interaction.Is_deal) || !interaction)) {
            const deal = await this.prisma.house.update({
                where: {
                    id: houseId,
                },
                data: {
                    deal: { increment: 1 },
                }
            });
        }
        if (dealing.Is_report && ((interaction && !interaction.Is_report) || !interaction)) {
            const report = await this.prisma.house.update({
                where: {
                    id: houseId,
                },
                data: {
                    report: { increment: 1 },
                }
            });
            if (report.report == 5) {
                const del = await this.prisma.house.delete({
                    where: {
                        id: houseId,
                    },
                });
            }
        }
        if (dealing.Is_like && ((interaction && !interaction.Is_like) || !interaction)) {
            const like = await this.prisma.house.update({
                where: {
                    id: houseId,
                },
                data: {
                    like: { increment: 1 },
                }
            });
        }
        else if (dealing.Is_like == false && interaction && interaction.Is_like) {
            const like = await this.prisma.house.update({
                where: {
                    id: houseId,
                },
                data: {
                    like: { decrement: 1 },
                }
            });
        }
        return newLesse;
    }
    async CreateLesseProfile(authorId, dto) {
        const newLesse = await this.prisma.lesse.create({
            data: Object.assign({ authorId }, dto),
        });
        return newLesse;
    }
    async GetLesseProfile(authorId) {
        return await this.prisma.lesse.findMany({
            where: { authorId }
        });
    }
};
LesseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Prisma_service_1.PrismaService])
], LesseService);
exports.LesseService = LesseService;
//# sourceMappingURL=lesse.service.js.map