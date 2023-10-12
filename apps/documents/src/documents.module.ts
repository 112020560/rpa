import { ApplicationModule } from '@app/application';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { DocumentsController } from './controllers/documents.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CqrsModule,
    ApplicationModule,
  ],
  controllers: [DocumentsController],
  providers: [],
})
export class DocumentsModule {}
