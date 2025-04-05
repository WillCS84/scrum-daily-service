import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8080;
  const nodeEnv = process.env.NODE_ENV;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(port, () =>
    console.log(
      `[${new Date().toISOString()}] 🚀 Launch Service started on port ${port}, (ENV: ${nodeEnv})`,
    ),
  );
}
bootstrap();
