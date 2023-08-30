import { Strategy } from 'passport-jwt';
import { JwtPayload } from '../Type/JwtPayload';
import { JwtPayloadWithRt } from '../Type/refreshPayload';
import { Request } from 'express';
declare const RtStrategy_base: new (...args: any[]) => Strategy;
export declare class RtStrategy extends RtStrategy_base {
    constructor();
    validate(req: Request, payload: JwtPayload): JwtPayloadWithRt;
}
export {};
