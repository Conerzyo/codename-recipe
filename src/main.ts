import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Hello my recipe app');
  await app.listen(process.env.SERVER_PORT);
  console.log('App listening on port:', process.env.SERVER_PORT);
}
bootstrap();
