import { Body, Controller, Delete, Get, HttpCode, 
    HttpStatus, Param, Patch, Post, Put, Query, UseGuards } 
from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dtos/creater-user.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import User from './entities/user.entity'
import { IsPublic } from 'src/auth/common/is-public.decorator';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ){}

    @Get()
    @IsPublic()
    findAll(){
        const records =  this.usersService.findAll();
        return records;
    }

   @Get(':id')
   findOne(@Param('id') id: number){
    return this.usersService.findOne(id);
   }

   @Post()
   @ApiCreatedResponse({description: 'Este endpoint sirve para crear nuevos usuarios',
    type: User,
})
   create(@Body() body: CreateUserDto){
    
    return this.usersService.create(body);
   }

   @Patch(':id')

   update(@Param('id') id: string, @Body() body){
   return this.usersService.update(+id, body);
   }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    destoy(@Param('id') id: number){
    return this.usersService.remove(id);
   }

    @Get('confirm-email')
    confirmEmail(): string{
        return 'this action returns confirms the email'
    }

}

