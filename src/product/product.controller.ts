import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { filterProductDto } from './dto/filter-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @EventPattern('getProducts')
  @UsePipes(ValidationPipe)
  getProduct(data: filterProductDto) {
    return this.productService.getProducts(data);
  }

  @EventPattern('createProduct')
  @UsePipes(new ValidationPipe({ groups: ['create'] }))
  async createProduct(data: ProductDto) {
    return this.productService.createProduct(data);
  }

  @EventPattern('updateProduct')
  @UsePipes(new ValidationPipe({ groups: ['update'] }))
  async updateProduct(data: ProductDto) {
    return this.productService.updateProduct(data);
  }

  @EventPattern('deleteProduct')
  async deleteProduct(id: number) {
    return this.productService.deleteProduct(id);
  }
}
