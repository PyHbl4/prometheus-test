import {
  Controller,
  Get,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(
    @Query('color') color?: string[],
    @Query('height') height?: number[],
    @Query('orderBy') orderBy?: string,
    @Query('order') order?: 'ASC' | 'DESC',
    @Query('categoryIds') categoryIds?: number[],
  ) {
    return this.productsService.findAll(color, height, orderBy, order, categoryIds);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.productsService.findOneBySlug(slug);
  }
}
