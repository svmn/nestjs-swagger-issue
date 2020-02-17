import { Controller, Get } from '@nestjs/common';
import { HelloResponseDto } from './hello.dto';

@Controller()
export class AppController {

  @Get()
  public async getHello(): Promise<HelloResponseDto> {
    return { optionalProperty: 'optionalProperty' };
  }
}
