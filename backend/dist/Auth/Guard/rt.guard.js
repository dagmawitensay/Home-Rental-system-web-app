"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RtGuards = void 0;
const passport_1 = require("@nestjs/passport");
class RtGuards extends (0, passport_1.AuthGuard)('jwt-refresh') {
    constructor() {
        super();
    }
}
exports.RtGuards = RtGuards;
//# sourceMappingURL=rt.guard.js.map