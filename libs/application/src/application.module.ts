import { DomainModule } from '@app/domain';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ApplicationService } from './application.service';
import { commandHandlers, queryHandlers } from './main/cqrs';

@Module({
  imports: [CqrsModule, DomainModule],
  providers: [ApplicationService, ...queryHandlers, ...commandHandlers],
  exports: [ApplicationService, ...queryHandlers, ...commandHandlers],
})
export class ApplicationModule {}
