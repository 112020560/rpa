import { AnalysisDomain } from './main/analysis/analysis.domain';

export * from './domain.module';
export * from './domain.service';

export const dependecyInjection = [
  {
    provide: 'IAnalysisDomain',
    useClass: AnalysisDomain,
  },
];
