import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../Type/JwtPayload";
import { Injectable } from "@nestjs/common";



@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'at-secret',
    });
  }

  validate(payload: JwtPayload) {
    console.log(payload);
    return payload;
  }
}