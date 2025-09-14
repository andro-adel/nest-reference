import 'reflect-metadata';
import { AppDataSource } from '../core/database/data-source';
import { Product } from '../modules/products/product.entity';

async function run() {
  await AppDataSource.initialize();

  const productRepo = AppDataSource.getRepository(Product);

  const exists = await productRepo.findOne({
    where: { name: 'Sample Product' },
  });
  if (!exists) {
    const p = productRepo.create({
      name: 'Sample Product',
      price: '19.99',
      stock: 100,
    });
    await productRepo.save(p);

    console.log('Seeded sample product');
  } else {
    console.log('Sample product already exists');
  }

  await AppDataSource.destroy();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
