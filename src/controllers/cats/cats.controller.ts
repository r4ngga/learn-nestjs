import { Controller, Get, Req, Post } from '@nestjs/common';
import type { Request } from 'express'; //for get function request from npm

//controllers a common general

// @Controller('cats')
// export class CatsController {
//   @Get()
//   findAll(): string {
//     return 'This action returns all cats';
//   }
// }


@Controller('cats')
export class CatsController {
  //Post
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  //with Req or request
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  //without Req or request
  @Get()
  findAllCats(): string {
    return 'This action returns all cats';
  }
}