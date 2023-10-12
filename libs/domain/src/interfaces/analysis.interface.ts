/* eslint-disable prettier/prettier */
import { AnalysisModel, SolicitudeDataModel, SolicitudeModel } from "../models";
import { Response } from '@app/domain/common/response'

export interface IAnalysisDomain {
    ProcessAnalysisAsync(analysisModel: AnalysisModel): Promise<Response<AnalysisModel>>;
    ProcessMasiveAnalysisAsync(analysisModels: AnalysisModel[]): Promise<Response<AnalysisModel>>;
    GetPendingAnalisysListAsync(analysisModel: AnalysisModel): Promise<Response<AnalysisModel>>;
    ProcessAnalysisWaitResponseAsync(analysisModel: AnalysisModel): Promise<Response<AnalysisModel>>;
    GetFinancialRequestListAsync(solicitudModel: SolicitudeModel): Promise<Array<SolicitudeDataModel>>;
}