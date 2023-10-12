import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CommonModule } from './common.module';

async function bootstrap() {
  console.log(process.env.COMMON_PORT);
  const port = process.env.COMMON_PORT || 8058;
  const app = await NestFactory.create(CommonModule);

  //MIDDLEWARES
  //app.useGlobalFilters(new HttpExceptionFilter());
  //app.useGlobalFilters(new ErrorFilter());
  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('/api');
  //Swagger
  const config = new DocumentBuilder()
    .setTitle('Common APIRest')
    .setDescription('APIRest to Utils common information')
    .setVersion('1.0')
    //.addTag('Controllers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);
}
bootstrap();
