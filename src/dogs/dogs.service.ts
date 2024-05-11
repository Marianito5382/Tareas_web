import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Dog from './entities/dog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private readonly dogRepository: Repository<Dog>,
  ) {}

  findAll() {
    return this.dogRepository.find();
  }

  findOne(id: number) {
    return this.dogRepository.findOne({ where: { id } });
  }

  create(dog) {
    const new_dog = this.dogRepository.create(dog);
    return this.dogRepository.save(new_dog);
  }

  async update(id: number, dog_update: Dog) {
    const dog = await this.findOne(id);
    this.dogRepository.merge(dog, dog_update);
    return this.dogRepository.save(dog);
  }

  async remove(id: number) {
    const dog = await this.dogRepository.findOne({ where: { id } });
    return this.dogRepository.remove(dog);
  }
}