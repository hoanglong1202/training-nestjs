import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    UsersModule,
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    AuthModule,
    RedisModule.forRoot({
      config: {
        url: 'redis://redis-10671.c11.us-east-1-3.ec2.cloud.redislabs.com:10671',
        password: 'gCI74ZOIYxl6NhTjWWPW3hNY41WlHy0V',
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
