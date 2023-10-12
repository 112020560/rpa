/* eslint-disable prettier/prettier */
import { IAnalysisRepository } from '@app/infrastructure/interfaces/analisys.interface';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { AnalysisModel } from '../../models/analisys.model';
import { ProcessResponseService } from '../common/processresponse';
import { Response } from '@app/domain/common/response'
import { IAnalysisDomain } from '@app/domain/interfaces/analysis.interface';
import { SolicitudeDataModel, SolicitudeModel } from '@app/domain/models';

@Injectable()
export class AnalysisDomain implements IAnalysisDomain {
    private readonly logger = new Logger(AnalysisDomain.name);

    constructor(
        @Inject('IAnalysisRepository')
        private readonly _analysisRepository: IAnalysisRepository,
        private readonly responseService: ProcessResponseService
    ) { }

    public async GetFinancialRequestListAsync(solicitudModel: SolicitudeModel): Promise<Array<SolicitudeDataModel>>{
        return this._analysisRepository.GetFinancialRequestListAsync(solicitudModel);
    }

    public async ProcessAnalysisAsync(analysisModel: AnalysisModel): Promise<Response<AnalysisModel>> {
        const analysis = await this._analysisRepository.ProcessAnalysisAsync(analysisModel);
        if (analysis && analysis.length > 0) {
            return this.responseService.processResponse<AnalysisModel>(analysis)
        }
        return {
            ResponseCode: "-100",
            ResponseMessage: "NO SE OBTUVIERON RESULTADOS",
            ResponseTechnicalMessage: "NO SE OBTUVIERON RESULTADOS EN LA BUSQUEDA DEL ANALYSIS",
            ResponseData: null
        }
    }


    public async ProcessMasiveAnalysisAsync(analysisModels: AnalysisModel[]): Promise<Response<AnalysisModel>> {
        const analysis = await this._analysisRepository.ProcessMasiveAnalysisAsync(analysisModels);
        if (analysis && analysis.length > 0) {
            return {
                ResponseCode: "00",
                ResponseMessage: JSON.stringify(analysis),
                ResponseData: null
            }
        } else {
            return {
                ResponseCode: "-100",
                ResponseMessage: "NO SE OBTUVIERON RESULTADOS",
            }
        }
    }

    public async GetPendingAnalisysListAsync(analysisModel: AnalysisModel): Promise<Response<AnalysisModel>> {
        const response = await this._analysisRepository.GetPendingAnalisysListAsync(analysisModel);
        return this.responseService.processResponse<AnalysisModel>(response);
    }

    public async ProcessAnalysisWaitResponseAsync(analysisModel: AnalysisModel): Promise<Response<AnalysisModel>> {
        let response = await this._analysisRepository.GetPendingAnalisysListAsync(analysisModel);
        let processResult = this.responseService.processResponse<AnalysisModel>(response);
        if (processResult && processResult.ResponseCode == "003") {
            while (processResult.ResponseCode == "003") {
                response = await this._analysisRepository.GetPendingAnalisysListAsync(analysisModel);
                processResult = this.responseService.processResponse<AnalysisModel>(response);
                this.task(1)
            }
        }

        return processResult;
    }

    task(i: number) {
        setTimeout(function () {
            //
        }, 3000 * i);
    }
}
