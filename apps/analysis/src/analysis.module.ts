import { ApplicationModule } from '@app/application';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { AnalysisController } from './controllers/analysis.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CqrsModule,
    ApplicationModule,
  ],
  controllers: [AnalysisController],
  providers: [],
})
export class AnalysisModule {}
