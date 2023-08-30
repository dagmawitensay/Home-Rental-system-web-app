import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../Type/JwtPayload';
import { JwtPayloadWithRt } from '../Type/refreshPayload';
import { Request } from 'express';


@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'rt-secret',
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: JwtPayload): JwtPayloadWithRt {
    const refreshToken = req.get('authorization').replace('Bearer', '').trim();
     

    if (!refreshToken) throw new ForbiddenException('Refresh token malformed');

    return {
      ...payload,
      refreshToken,
    };
  }
}