import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      DB_NAME: process.env.POSTGRES_DB,
      DB_PORT: parseInt(process.env.DB_HOST, 10),
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_USERNAME: process.env.DB_USERNAME,
      DB_HOST: process.env.POSTGRES_HOST,
    },
    Port: parseInt(process.env.PORT, 10),
  };
});
