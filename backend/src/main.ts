import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('APAP Gestion de tareas')
    .setDescription(
      'Desarrollar una aplicación web de gestión de tareas que conste de un Backend que proporciona una API RESTful',
    )
    .setVersion('1.0')
    .addTag('DEV')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Set-Cookie',
    methods: 'GET, POST, PUT, DELETE',
  });

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
