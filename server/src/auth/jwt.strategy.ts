import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { JWTPayload } from './interfaces/payload.interface';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                JwtStrategy.extractJWT,
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    private static extractJWT(request: Request): string | null {
        if (request.cookies && request.cookies.token) return request.cookies.token;
        return null;
    }

    async validate(payload: User) {
        return {
            user_id: payload.user_id,
            username: payload.username,
            email: payload.email,
            role: payload.role,
        };
    }
}
