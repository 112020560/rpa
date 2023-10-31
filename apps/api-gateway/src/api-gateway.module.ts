import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { RpaContrller } from './controllers/rpa.controller';
import { RpaService } from './services/rpa.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AnalysisService } from './services/analysys.service';
import { AnalysisController } from './controllers/analysys.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'SERVICE_RPA',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8888,
        },
      },
      {
        name: 'SERVICE_ANALYSIS',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8887,
        },
      },
    ]),
  ],
  controllers: [RpaContrller, AnalysisController],
  providers: [RpaService, AnalysisService],
})
export class ApiGatewayModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
