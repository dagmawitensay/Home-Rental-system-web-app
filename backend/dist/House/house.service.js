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
exports.HouseService = void 0;
const common_1 = require("@nestjs/common");
const Prisma_service_1 = require("../Prisma/Prisma.service");
let HouseService = class HouseService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async GetAllHouseByAdmin() {
        return await this.prisma.house.findMany({
            where: { Approval_status: false },
            include: {
                lesser: true,
                Home_Photo: {
                    select: {
                        Door: true,
                    },
                },
            },
        });
    }
    async GetHouseByIdAdmin(houseId) {
        const findHouse = await this.prisma.house.findFirst({
            where: {
                Approval_status: false,
                id: houseId,
            },
            include: {
                lesser: true,
                Home_Photo: true,
            },
        });
        if (!findHouse)
            throw new common_1.ForbiddenException("There are not unapproved houses");
        return findHouse;
    }
    async ApproveHouseById(houseId, dto) {
        const isNotApproved = await this.prisma.house.findFirst({
            where: { id: houseId,
                Approval_status: false }
        });
        if (!isNotApproved)
            throw new common_1.ForbiddenException("house is already approved");
        return this.prisma.house.update({
            where: {
                id: houseId,
            },
            data: Object.assign({}, dto),
        });
    }
    async CreateHouse(lesserId, dto, photo) {
        const findLesser = await this.prisma.lesser.findFirst({
            where: { id: lesserId },
        });
        if (!findLesser)
            throw new common_1.ForbiddenException("Lesser is not found");
        const NewHouse = await this.prisma.house.create({
            data: Object.assign(Object.assign({ lesserId }, dto), { Home_Photo: {
                    create: { Wall: photo.Wall,
                        Door: photo.Door,
                        Floor: photo.Floor,
                        Roof: photo.Roof,
                        Toilet: photo.Toilet,
                        Shower: photo.Shower,
                        Kitchen: photo.Kitchen,
                        Home_license: photo.Home_license
                    }
                } }),
        });
        NewHouse.lesserId = findLesser.id;
        return NewHouse;
    }
    async GetAllHouseByLesser(lesserId) {
        const LesserHouse = await this.prisma.house.findMany({
            where: { lesserId },
            include: {
                Home_Photo: {
                    select: { Door: true },
                },
            },
        });
        return LesserHouse;
    }
    async GetDetailHouseByLesser(lesserId, houseId) {
        const Is_deal = await this.prisma.lesseOnHouse.count({
            where: { Is_deal: true }
        });
        const houseLists = await this.prisma.house.findFirst({
            where: {
                id: houseId,
                lesserId,
            },
            include: {
                _count: {
                    select: {
                        lesse: true,
                    }
                },
                lesse: {
                    select: {
                        Is_deal: true
                    }
                },
                Home_Photo: true
            }
        });
        return houseLists;
    }
    async UpdateHouseByIdLesser(lesserId, houseId, dto) {
        const houseUpdate = await this.prisma.lesser.findUnique({
            where: {
                id: lesserId
            },
        });
        if (!houseUpdate)
            throw new common_1.ForbiddenException("Access to resources denied");
        return this.prisma.house.update({
            where: {
                id: houseId,
            },
            data: Object.assign({ Approval_status: false }, dto),
        });
    }
    async GetAllHouseByAnyOne(query) {
        let houseLists;
        if (query) {
            houseLists = await this.prisma.house.findMany({
                where: {
                    Home_Type: query.Home_Type,
                    Sub_City: query.location,
                },
                include: {
                    lesser: true,
                    Home_Photo: {
                        select: {
                            Door: true,
                        },
                    },
                },
            });
        }
        else {
            houseLists = await this.prisma.house.findMany({
                where: {
                    Approval_status: true,
                },
                include: {
                    lesser: true,
                    Home_Photo: {
                        select: {
                            Door: true,
                        },
                    },
                },
            });
        }
        return houseLists;
    }
    async GetHouseById(lesseId, houseId) {
        const findHouse = await this.prisma.house.findFirst({
            where: {
                Approval_status: true,
                id: houseId,
            },
            include: {
                _count: {
                    select: {
                        lesse: true
                    }
                },
                lesse: true,
                lesser: true,
                Home_Photo: true,
            },
        });
        return findHouse;
    }
    async DeleteHouseByLesser(lesserId, houseId) {
        const houseDelete = await this.prisma.house.findFirst({
            where: {
                lesserId,
                id: houseId
            }
        });
        if (!houseDelete)
            throw new common_1.ForbiddenException(" No Deleted house found");
        await this.prisma.house.delete({
            where: { id: houseId }
        });
        return { message: `house id number ${houseId} successfully deleted` };
    }
};
HouseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Prisma_service_1.PrismaService])
], HouseService);
exports.HouseService = HouseService;
//# sourceMappingURL=house.service.js.map