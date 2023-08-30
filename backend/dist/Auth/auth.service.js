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
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const Prisma_service_1 = require("../Prisma/Prisma.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
    async GetToken(userId, username, role) {
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                username,
                role,
            }, { secret: "at-secret", expiresIn: 60 * 60 * 7 }),
            this.jwtService.signAsync({
                sub: userId,
                username,
                role,
            }, { secret: "rt-secret", expiresIn: 60 * 60 * 7 }),
        ]);
        return {
            access_token: at,
            refresh_token: rt,
            role
        };
    }
    async UpdateRefreshHash(userId, rt) {
        const hash = await this.hashData(rt);
        await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                refreshPassword: hash,
            },
        });
    }
    async LesserSignup(createDto, lesserDto) {
        const hash = await this.hashData(createDto.Password);
        const NewUser = await this.prisma.user.create({
            data: {
                User_Name: createDto.User_Name,
                hash: hash,
                role: 'LESSER',
                lesser: {
                    create: Object.assign({}, lesserDto)
                }
            },
        });
        const tokens = await this.GetToken(NewUser.id, NewUser.User_Name, NewUser.role);
        await this.UpdateRefreshHash(NewUser.id, tokens.refresh_token);
        return tokens;
    }
    async LesseSignup(createDto, lesseDto) {
        const hash = await this.hashData(createDto.Password);
        const NewUser = await this.prisma.user.create({
            data: {
                User_Name: createDto.User_Name,
                hash: hash,
                role: 'LESSE',
                lesse: {
                    create: Object.assign({}, lesseDto)
                }
            },
        });
        const tokens = await this.GetToken(NewUser.id, NewUser.User_Name, NewUser.role);
        await this.UpdateRefreshHash(NewUser.id, tokens.refresh_token);
        return tokens;
    }
    async Signin(createdto) {
        const user = await this.prisma.user.findUnique({
            where: {
                User_Name: createdto.User_Name,
            },
            include: {
                lesse: {
                    select: { id: true }
                },
                lesser: {
                    select: {
                        id: true
                    }
                }
            }
        });
        if (!user)
            throw new common_1.ForbiddenException("access denied");
        const isMatch = await bcrypt.compare(createdto.Password, user.hash);
        if (!isMatch)
            throw new common_1.ForbiddenException("denied");
        const tokens = await this.GetToken(user.id, user.User_Name, user.role);
        await this.UpdateRefreshHash(user.id, tokens.refresh_token);
        return { Tokens: tokens, user: user };
    }
    logout() {
        return "logout";
    }
    refresh() {
        return "refresh";
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map