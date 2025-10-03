import { Controller, Get, Req, Post } from '@nestjs/common';
import type { Request } from 'express'; //for get function request from npm

@Controller('products')
export class ProductsController {

    //without Req or request
    @Get()
    findAllProducts(): string {
        return 'This action returns all cats';
    }
    
}