/* eslint-disable prettier/prettier */
import { AnalysisRequest, MasiveAnalysisRequest, PendingAnalysisRequest, ProcessAnalysisRequest } from '@app/application/main/cqrs/analysis';
import { AnalysisModel, SolicitudeDataModel } from '@app/domain/models';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Response } from '@app/domain/common/response';

@Injectable()
export class AnalysisService {
    constructor(
        @Inject('SERVICE_ANALYSIS')
        private readonly clientServiceAnalysis: ClientProxy,
    ){}
    
     ProcessTask(request: ProcessAnalysisRequest):Observable<Response<AnalysisModel>> {
        const pattern = { cmd: 'process' };
        return this.clientServiceAnalysis.send<Response<AnalysisModel>>(pattern, request);
    }
  

    ProcessMassiveTask(request: MasiveAnalysisRequest):Observable<Response<AnalysisModel>> {
        const pattern = { cmd: 'processmassive' };
        return this.clientServiceAnalysis.send<Response<AnalysisModel>>(pattern, request);
    }
  
   
    RequestListTask(request: AnalysisRequest): Observable<Array<SolicitudeDataModel>> {
      const pattern = { cmd: 'requestlist' };
      return this.clientServiceAnalysis.send<Array<SolicitudeDataModel>>(pattern, request);
    }
  
    
    GetTask(request: PendingAnalysisRequest): Observable<Response<AnalysisModel>> {
        const pattern = { cmd: 'get' };
        return this.clientServiceAnalysis.send<Response<AnalysisModel>>(pattern, request);
    }
  
    
    GetAwaitTask(request: PendingAnalysisRequest): Observable<Response<AnalysisModel>> {
        const pattern = { cmd: 'awaitget' };
      return this.clientServiceAnalysis.send<Response<AnalysisModel>>(pattern, request);
    }
}
