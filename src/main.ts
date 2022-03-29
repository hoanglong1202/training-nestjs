import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const redisApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        url: 'redis://redis-10671.c11.us-east-1-3.ec2.cloud.redislabs.com:10671',
        auth_pass: 'gCI74ZOIYxl6NhTjWWPW3hNY41WlHy0V',
        host: 'localhost',
        port: 6379,
      },
    },
  );
  await redisApp.listen();

  const mongoApp = await NestFactory.create(AppModule);
  await mongoApp.listen(3000);
}

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
bootstrap();
