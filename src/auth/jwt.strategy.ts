import {  Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";

type Payload ={
    sub: number;
    name: string;
    iat: number;

}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly usersService: UsersService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpirations: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }

async validate(payload: Payload){
    const user = await this.usersService.findOne(payload.sub);
    return user;
}
}