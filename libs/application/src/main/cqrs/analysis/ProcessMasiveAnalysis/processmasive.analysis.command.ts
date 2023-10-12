/* eslint-disable prettier/prettier */
import { ICommand } from '@nestjs/cqrs';
import { MasiveAnalysisRequest } from './processmasive.analysis.request';
export class MasiveAnalysisCommand implements ICommand {
    constructor(public readonly request: MasiveAnalysisRequest) { }
}