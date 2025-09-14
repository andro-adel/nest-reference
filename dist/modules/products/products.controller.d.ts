import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly products;
    constructor(products: ProductsService);
    create(dto: CreateProductDto): Promise<import("./product.entity").Product>;
    findAll(): Promise<import("./product.entity").Product[]>;
    findOne(id: string): Promise<import("./product.entity").Product>;
    update(id: string, dto: UpdateProductDto): Promise<import("./product.entity").Product>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
