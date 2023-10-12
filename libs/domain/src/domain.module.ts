import { InfrastructureModule } from '@app/infrastructure';
import { Module } from '@nestjs/common';
import { dependecyInjection } from '.';
import { DomainService } from './domain.service';
import { AnalysisDomain } from './main/analysis/analysis.domain';
import { CaptchaDomain } from './main/captcha/captcha.domain';
import { ProcessResponseService } from './main/common/processresponse';
import { DocumentDomain } from './main/documents/documents.domain';
import { ParametersDomain } from './main/parameters/parameters.domain';
import { RpaDomain } from './main/rpa/rpa.domain';

@Module({
  imports: [InfrastructureModule],
  providers: [
    ProcessResponseService,
    DomainService,
    {
      provide: 'IAnalysisDomain',
      useClass: AnalysisDomain,
    },
    {
      provide: 'IDocumentDomain',
      useClass: DocumentDomain,
    },
    {
      provide: 'IParametersDomain',
      useClass: ParametersDomain,
    },
    {
      provide: 'IRpaDomain',
      useClass: RpaDomain,
    },
    {
      provide: 'ICaptchaDomain',
      useClass: CaptchaDomain,
    },
  ],
  exports: [
    DomainService,
    {
      provide: 'IAnalysisDomain',
      useClass: AnalysisDomain,
    },
    {
      provide: 'IDocumentDomain',
      useClass: DocumentDomain,
    },
    {
      provide: 'IParametersDomain',
      useClass: ParametersDomain,
    },
    {
      provide: 'IRpaDomain',
      useClass: RpaDomain,
    },
    {
      provide: 'ICaptchaDomain',
      useClass: CaptchaDomain,
    },
  ],
})
export class DomainModule {}
