"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLesserId = void 0;
const common_1 = require("@nestjs/common");
const Prisma_service_1 = require("../../Prisma/Prisma.service");
exports.GetLesserId = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    let prisma = new Prisma_service_1.PrismaService;
    const id = request.user['sub'];
    const result = prisma.lesser.findUnique({
        where: {
            authorId: id,
        }
    });
    console.log(result);
    return result;
});
//# sourceMappingURL=lesser.decorator.js.map