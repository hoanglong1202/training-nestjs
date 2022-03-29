import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const mongoApp = await NestFactory.create(AppModule);
  await mongoApp.listen(3000);
}
bootstrap();
