/* eslint-disable prettier/prettier */
import { AnalysisRequest, MasiveAnalysisRequest, PendingAnalysisRequest, ProcessAnalysisRequest } from '@app/application/main/cqrs/analysis';
import { Controller, Get, Param, Post, Body, Put, Delete, Version } from '@nestjs/common';
import { AnalysisService } from '../services/analysys.service';

@Controller('className')
export class AnalysisController {
  constructor(private analysisService: AnalysisService) {}
  
  @Version('1')
  @Post("process")
  ProcessTask(@Body() request: ProcessAnalysisRequest) {
    return this.analysisService.ProcessTask(request);
  }

  @Version('1')
  @Post("processmassive")
  ProcessMassiveTask(@Body() request: MasiveAnalysisRequest) {
    return this.analysisService.ProcessMassiveTask(request);
  }

  @Version('1')
  @Post("requestlist")
  RequestListTask(@Body() request: AnalysisRequest) {
    return this.analysisService.RequestListTask(request);
  }

  @Version('1')
  @Post("get")
  GetTask(@Body() request: PendingAnalysisRequest) {
    return this.analysisService.GetTask(request);
  }

  @Version('1')
  @Post("awaitget")
  GetAwaitTask(@Body() request: PendingAnalysisRequest) {
    request.AwaitResponse = true;
    return this.analysisService.GetAwaitTask(request)
  }
}
