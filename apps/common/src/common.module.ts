import { ApplicationModule } from '@app/application';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { CommonController } from './controllers/common.controller';
import { CatalogController } from './controllers/catalog.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CqrsModule,
    ApplicationModule,
  ],
  controllers: [CommonController, CatalogController],
  providers: [],
})
export class CommonModule {}
