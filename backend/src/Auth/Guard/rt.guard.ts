import { AuthGuard } from "@nestjs/passport"

export class RtGuards extends AuthGuard('jwt-refresh'){
    constructor(){
        super();
    }
}