/* eslint-disable prettier/prettier */
import { IQuery } from '@nestjs/cqrs';
import { AnalysisRequest } from './getanalsisyRequest';

export class GetAnalysisQuery implements IQuery {
  constructor(public readonly request: AnalysisRequest) {}
}
