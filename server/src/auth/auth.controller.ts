import { Controller, Request, Post, UseGuards, Body, Res, ConflictException, BadRequestException } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UsersService,
    ) {}

    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        let user: User = null;

        // Check that all field arn't empty. Also verified in front but double verification is someone call the back directly and cors are not working
        if (Object.values(registerDto).some((data) => data === undefined))
            throw new BadRequestException('All fields must not be empty.');

        // Check if email already exists
        user = await this.userService.findByEmail(registerDto.email);
        if (user) {
            console.log('Email already used');
            throw new ConflictException('Email already used.');
        }

        // Do the same with username
        user = await this.userService.findByEmail(registerDto.email);
        if (user) throw new ConflictException('Username already used.');

        // else continue and create new user
        user = new User();
        const hash: string = await bcrypt.hash(registerDto.password, 10);
        user.email = registerDto.email;
        user.password = hash;

        return this.userService.create(user);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req, @Res() response: Response) {
        const token = await this.authService.login(req.user);
        const expiresTime = new Date();

        expiresTime.setDate(expiresTime.getDate() + 1);
        response.cookie('token', token, { expires: expiresTime });
        return response.send(req.user);
    }

    @Post('logout')
    async logout(@Res() response: Response) {
        response.cookie('token', '', { expires: new Date() });
        return response.send();
    }
}
