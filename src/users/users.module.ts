import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import Role from './entities/role.entity';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from 'src/auth/jwt.guard';

@Module({
    imports:[TypeOrmModule.forFeature([User, Role])],
    controllers:[UsersController, RolesController],
    providers:[UsersService, 
        RolesService,
    {
        provide: APP_GUARD,
        useClass: JwtGuard,
    }
    ],
    exports: [UsersService],
})

export class UsersModule {}
