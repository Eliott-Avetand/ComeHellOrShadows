import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { JWTPayload } from './interfaces/payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);

        if (user && bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;

            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload: User = user;
        const token = this.jwtService.sign(payload);

        return token;
    }
}