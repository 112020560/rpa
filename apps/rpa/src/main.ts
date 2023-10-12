//import { VersioningType } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
//import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(process.env.MICROSERVICE_RPA_PORT);
  const port = process.env.MICROSERVICE_RPA_PORT || 8888;
  const logger = new Logger();
  // const app = await NestFactory.create(AppModule);

  //MIDDLEWARES
  //app.useGlobalFilters(new HttpExceptionFilter());
  //app.useGlobalFilters(new ErrorFilter());
  // app.enableCors();
  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });
  // app.setGlobalPrefix('/api');
  // //Swagger
  // const config = new DocumentBuilder()
  //   .setTitle('RPA APIRest')
  //   .setDescription('APIRest to process RPA Information')
  //   .setVersion('1.0')
  //   //.addTag('Controllers')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('swagger', app, document);

  // await app.listen(port);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: port,
    },
  });

  app.listen();

  logger.log('Microservice RPA is listening');
}
bootstrap();
