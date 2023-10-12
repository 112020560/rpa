/* eslint-disable prettier/prettier */
import { IQuery } from '@nestjs/cqrs';
import { PendingAnalysisRequest } from './pendingAnalysisReques';
export class PendingAnalysisQuery implements IQuery {
  constructor(public readonly request: PendingAnalysisRequest) {}
}
