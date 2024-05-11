import { IsEmail, IsOptional, IsString, IsUrl, MaxLength, MinLength }  from "class-validator";

export default class CreateUserDto{
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    address: string;

    @IsString()
    password: string;

    @IsString()
    lastname: string;
}

