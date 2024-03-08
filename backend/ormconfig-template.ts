import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',
  password: '',
  database: '',
  synchronize: false,
  entities: ['src/modules/**/**/*.entity.ts'],
  migrations: ['src/modules/database/migrations/*.ts'],
});
