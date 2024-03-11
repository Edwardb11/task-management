## Configuración general y Ejecución del Proyecto
1. Crear en la raiz el proyecto backend un archivo llamado ```.env```: Copiar el siguiente codigo

```bash
DB_PASSWORD=0oI0afBJdp8IQRwu3hHVZtH7++9IXtuqg2CRj2VddWU=
DB_NAME=task-management
DB_USERNAME=postgres
DB_HOST=localhost
DB_PORT=5432
PORT=8000
```

2. Crear en la raiz el proyecto backend un archivo llamado ```ormconfig.ts```: Copiar el siguiente codigo

```bash
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '0oI0afBJdp8IQRwu3hHVZtH7++9IXtuqg2CRj2VddWU=',
  database: 'task-management',
  synchronize: false,
  entities: ['src/modules/**/**/*.entity.ts'],
  migrations: ['src/modules/database/migrations/*.ts'],
});

```

### Comandos para ejecutar el proyecto
__Clonar el repositorio__
```bash
git clone https://github.com/Edwardb11/task-management
```
__Moverse a la carpeta backend__
```bash
cd backend
```

__Crear BD en postgres o subir la base de datos en docker__
```bash
docker compose up -d
```
__Instalar dependencias__
```bash
npm i
```

__Correr migraciones__
```bash
npm run migration:run
```

__Para correr el proyecto__

```bash
npm run start:dev
```


DOCUMENTACION: https://github.com/Edwardb11/task-management/wiki