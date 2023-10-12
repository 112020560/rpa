import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AnalysisModule } from './analysis.module';

async function bootstrap() {
  console.log(process.env.ANALYSIS_PORT);
  const port = process.env.ANALYSIS_PORT || 8055;
  const app = await NestFactory.create(AnalysisModule);
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
    .setTitle('Analysis APIRest')
    .setDescription('APIRest to process SIC Analysis')
    .setVersion('1.0')
    //.addTag('Controllers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);
}
bootstrap();
