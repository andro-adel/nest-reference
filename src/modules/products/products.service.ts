import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  create(dto: CreateProductDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: string) {
    const found = await this.repo.findOne({ where: { id } });
    if (!found) throw new NotFoundException('Product not found');
    return found;
  }

  async update(id: string, dto: UpdateProductDto) {
    const existing = await this.findOne(id);
    Object.assign(existing, dto);
    return this.repo.save(existing);
  }

  async remove(id: string) {
    const existing = await this.findOne(id);
    await this.repo.remove(existing);
    return { deleted: true };
  }
}
