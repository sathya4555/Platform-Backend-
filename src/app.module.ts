import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityModule } from './app/entity.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    EntityModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    // 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
