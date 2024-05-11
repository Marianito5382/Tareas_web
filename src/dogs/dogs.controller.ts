import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { DogsService } from './dogs.service';
import CreateDogDto from './dtos/create-dog.dto';
  
  
  @Controller('dogs')
  export class DogsController {
    constructor(private readonly dogService: DogsService) {}
    @Get()
    findAll() {
      return this.dogService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.dogService.findOne(id);
    }
  
    @Post()
    create(@Body() body: CreateDogDto) {
      return this.dogService.create(body);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() body) {
      return this.dogService.update(id, body);
    }
  
    @Delete(':id')
    destroy(@Param('id') id: number) {
      return this.dogService.remove(id);
    }
  }