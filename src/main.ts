import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //?This avoid the payload that is not in the DTO
      forbidNonWhitelisted: true, //? This throw a error message that dont allow put more data that is not in the DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
