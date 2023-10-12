/* eslint-disable prettier/prettier */
import { AnalysisModel, AnalysisResponse, SolicitudeDataModel, SolicitudeModel } from "@app/domain/models";

export interface IAnalysisRepository {
    ProcessAnalysisAsync(analysisModel: AnalysisModel): Promise<Array<AnalysisResponse>>;
    ProcessMasiveAnalysisAsync(analysisModels: AnalysisModel[]): Promise<any[]>;
    GetPendingAnalisysListAsync(analysisModel: AnalysisModel): Promise<Array<AnalysisResponse>>;
    GetFinancialRequestListAsync(solicitudModel: SolicitudeModel): Promise<Array<SolicitudeDataModel>>;
}