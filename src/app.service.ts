import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService ){}

  getHello(): string {
    return 'Que tal compañeros, es un gusto aprender con ustedes!';
  }

  getMessage(): string {
    return this.configService.get('DB_HOST');
  }
}