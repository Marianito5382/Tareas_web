import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LocalGuard } from './local.guard';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
    constructor(private readonly jwtService: JwtService){}

    @Post('login')
    @UseGuards(LocalGuard)
    async login(@Req() request: Request){
        //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
        const user = request.user as User;

        const payload ={
            sub: user.id,
            name: '${user.name} ${user.lastname}',
            iat: new Date().getTime(),
        };

        const accesToken = await this.jwtService.signAsync(payload);

        return {
            acces_token: accesToken,
        };
    }
}
