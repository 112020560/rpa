import { NestFactory } from '@nestjs/core';
import { AuthSvcModule } from './auth-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthSvcModule);
  await app.listen(3000);
}
bootstrap();
