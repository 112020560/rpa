import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DocumentsModule } from './documents.module';

async function bootstrap() {
  console.log(process.env.DOCUMENTS_PORT);
  const port = process.env.DOCUMENTS_PORT || 8058;
  const app = await NestFactory.create(DocumentsModule);

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
    .setTitle('Documents APIRest')
    .setDescription('APIRest to process Analysis Documents')
    .setVersion('1.0')
    //.addTag('Controllers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);
}
bootstrap();
