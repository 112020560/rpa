import { ApplicationModule } from '@app/application';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { DemandController } from './controllers/demand.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CqrsModule,
    ApplicationModule,
  ],
  controllers: [DemandController],
  providers: [],
})
export class DemandModule {}
