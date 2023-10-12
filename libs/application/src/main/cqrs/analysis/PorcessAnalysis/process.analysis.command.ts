/* eslint-disable prettier/prettier */
import { ICommand } from "@nestjs/cqrs";
import { ProcessAnalysisRequest } from "./process.analysis.request";

export class ProcessAnalysisCommand implements ICommand {
    constructor(public readonly request: ProcessAnalysisRequest){}
}