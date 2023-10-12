import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  console.log(process.env.GATEWAY_PORT);
  const port = process.env.GATEWAY_PORT || 8058;
  const app = await NestFactory.create(ApiGatewayModule);

  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('/api');
  //Swagger
  const config = new DocumentBuilder()
    .setTitle('Api-Gateway')
    .setDescription('ApiGateway to rpa Microservices')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);
}
bootstrap();
