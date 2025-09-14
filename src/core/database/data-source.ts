import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config as loadEnv } from 'dotenv';
import { Product } from '../../modules/products/product.entity';

loadEnv();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'nest_reference',
  entities: [Product],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  logging: (process.env.TYPEORM_LOGGING || 'false') === 'true',
});

export default AppDataSource;
