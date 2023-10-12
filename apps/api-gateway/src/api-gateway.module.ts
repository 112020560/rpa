import { Module } from '@nestjs/common';
import { RpaContrller } from './controllers/rpa.controller';
import { RpaService } from './services/rpa.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

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
    ]),
  ],
  controllers: [RpaContrller],
  providers: [RpaService],
})
export class ApiGatewayModule {}
