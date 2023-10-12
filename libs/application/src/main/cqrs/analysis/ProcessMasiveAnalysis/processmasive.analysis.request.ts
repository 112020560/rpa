/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { ProcessAnalysisRequest } from "../PorcessAnalysis/process.analysis.request";

export class MasiveAnalysisRequest {
    @ApiProperty({type: ProcessAnalysisRequest, isArray: true})
    ProcessAnalysisRequestsList: Array<ProcessAnalysisRequest>;
}