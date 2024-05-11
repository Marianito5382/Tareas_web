import { IsNumber, IsString } from 'class-validator';

export default class CreateDogDto {
  @IsString()
  name: string;
  @IsString()
  race: string;
  @IsNumber()
  age: number;
  @IsNumber()
  weight: number;
  @IsString()
  gender: string;
}

