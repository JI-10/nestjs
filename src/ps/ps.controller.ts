import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PSdto } from './dto';

import { psService } from './ps.service';

@Controller()
export class psController {
  constructor(private readonly psService: psService) {}

  @Post('create')
  addProduct(@Body() dto:PSdto) {
    this.psService.insertPS(dto)
  }

  // @Get()
  // getAllProducts() {
  //   return this.productsService.getProducts();
  // }

  // @Get(':id')
  // getProduct(@Param('id') prodId: string) {
  //   return this.productsService.getSingleProduct(prodId);
  // }

  // @Patch(':id')
  // updateProduct(
  //   @Param('id') prodId: string,
  //   @Body('title') prodTitle: string,
  //   @Body('description') prodDesc: string,
  //   @Body('price') prodPrice: number,
  // ) {
  //   this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
  //   return null;
  // }

  // @Delete(':id')
  // removeProduct(@Param('id') prodId: string) {
  //     this.productsService.deleteProduct(prodId);
  //     return null;
  // }
}
