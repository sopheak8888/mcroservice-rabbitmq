import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { filterProductDto } from './dto/filter-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private userRepository: Repository<Product>,
  ) {}

  async createProduct(data: ProductDto) {
    const product = this.userRepository.create(data);
    return this.userRepository.save(product);
  }

  async getProducts(data: filterProductDto) {
    Object.keys(data).forEach(
      (key) => data[key] === undefined && delete data[key],
    );
    return this.userRepository.find({
      where: data,
    });
  }

  async updateProduct(data: ProductDto) {
    return this.userRepository.update(data.id, data);
  }

  async deleteProduct(id: number) {
    return this.userRepository.delete(id);
  }
}
