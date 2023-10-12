import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureService } from './infrastructure.service';
import { AnalysisRepository } from './repositories/analysys.repository';
import configuration from './configuration/db.configuration';
import { DocumentsRepository } from './repositories/document.repository';
import { CompanyRepository } from './repositories/company.repository';
import { CompanyInterfaceRepository } from './repositories/companyinterface.repository';
import { GenericTypeRepository } from './repositories/generictypecatalog.repositoty';
import { RpaRepository } from './repositories/rpa.repository';
import { CaptchaRepository } from './repositories/captcha.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  providers: [
    InfrastructureService,
    {
      provide: 'IAnalysisRepository',
      useClass: AnalysisRepository,
    },
    {
      provide: 'IDocumentsRepository',
      useClass: DocumentsRepository,
    },
    {
      provide: 'ICompanyRepository',
      useClass: CompanyRepository,
    },
    {
      provide: 'ICompanyInterfaceRepository',
      useClass: CompanyInterfaceRepository,
    },
    {
      provide: 'IGenericTypeRepository',
      useClass: GenericTypeRepository,
    },
    {
      provide: 'IRpaRepository',
      useClass: RpaRepository,
    },
    {
      provide: 'ICaptchaRepository',
      useClass: CaptchaRepository,
    },
  ],
  exports: [
    InfrastructureService,
    {
      provide: 'IAnalysisRepository',
      useClass: AnalysisRepository,
    },
    {
      provide: 'IDocumentsRepository',
      useClass: DocumentsRepository,
    },
    {
      provide: 'ICompanyRepository',
      useClass: CompanyRepository,
    },
    {
      provide: 'ICompanyInterfaceRepository',
      useClass: CompanyInterfaceRepository,
    },
    {
      provide: 'IGenericTypeRepository',
      useClass: GenericTypeRepository,
    },
    {
      provide: 'IRpaRepository',
      useClass: RpaRepository,
    },
    {
      provide: 'ICaptchaRepository',
      useClass: CaptchaRepository,
    },
  ],
})
export class InfrastructureModule {}
