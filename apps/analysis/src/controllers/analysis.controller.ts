/* eslint-disable prettier/prettier */

import { AnalysisRequest, 
  GetAnalysisQuery, 
  MasiveAnalysisCommand, 
  MasiveAnalysisRequest, 
  PendingAnalysisQuery, 
  PendingAnalysisRequest, 
  ProcessAnalysisCommand, 
  ProcessAnalysisRequest } from '@app/application/main/cqrs/analysis';
import { Body, Controller, Get, Post, Version } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Analysis')
@Controller('Analysis')
export class AnalysisController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) { }

  // @Get()
  // getHello(): string {
  //   return this.analysisService.getHello();
  // }
  @Version('1')
  @Post("process")
  async ProcessTask(@Body() request: ProcessAnalysisRequest) {
    return await this.commandBus.execute(new ProcessAnalysisCommand(request))
  }

  @Version('1')
  @Post("processmassive")
  async ProcessMassiveTask(@Body() request: MasiveAnalysisRequest) {
    return await this.commandBus.execute(new MasiveAnalysisCommand(request))
  }

  @Version('1')
  @Post("requestlist")
  async RequestListTask(@Body() request: AnalysisRequest) {
    return await this.queryBus.execute(new GetAnalysisQuery(request))
  }

  @Version('1')
  @Post("get")
  async GetTask(@Body() request: PendingAnalysisRequest) {
    return await this.queryBus.execute(new PendingAnalysisQuery(request))
  }

  @Version('1')
  @Post("awaitget")
  async GetAwaitTask(@Body() request: PendingAnalysisRequest) {
    request.AwaitResponse = true;
    return await this.queryBus.execute(new PendingAnalysisQuery(request))
  }
}
