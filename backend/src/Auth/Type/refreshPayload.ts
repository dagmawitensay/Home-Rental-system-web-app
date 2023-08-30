
import { JwtPayload } from './JwtPayload';

export type JwtPayloadWithRt = JwtPayload & { refreshToken: string };