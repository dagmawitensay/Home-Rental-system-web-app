"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtGuards = void 0;
const passport_1 = require("@nestjs/passport");
class AtGuards extends (0, passport_1.AuthGuard)('jwt') {
    constructor() {
        super();
    }
}
exports.AtGuards = AtGuards;
//# sourceMappingURL=House.guard.js.map