## Configuración general y Ejecución del Proyecto
1. Crear un archivo .env en la raíz del proyecto

2. Crear un archivo ormconfig.ts en la raíz del proyecto

### Comandos 
__Generar migraciones__
```bash
npm run migration:generate --name="nombre_aqui"
```
__Correr migraciones__
```bash
npm run migration:run
```
__Revertir migraciones__

```bash
npm run migration:revert
```
__Para correr el proyecto__

```bash
npm run start:dev
```