import { Controller, Get } from '@nestjs/common';
import { HelloResponseDto, SingleEnum } from './hello.dto';


@Controller()
export class AppController {

  @Get()
  public async getHello(): Promise<HelloResponseDto> {
    return { prop: SingleEnum.ZERO  };
  }
}
