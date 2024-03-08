## Configuración general y Ejecución del Proyecto
1. Crear un archivo .env en la raíz del proyecto

2. Crear un archivo ormconfig.ts en la raíz del proyecto

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