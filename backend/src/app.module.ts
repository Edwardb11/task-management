import { DatabaseModule } from './modules/database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './modules/tasks/tasks.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV || '.env',
      load: [config],
      isGlobal: true,
    }),
    DatabaseModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
