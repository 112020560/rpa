/* eslint-disable prettier/prettier */
import { AnalysisRepository } from "./analysys.repository";

export const dependencyInjection = [
  {
    provide: 'IAnalysisRepository',
    useClass: AnalysisRepository,
  },
];
