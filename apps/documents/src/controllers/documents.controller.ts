import {
  GetDocumentsQuery,
  GetDocumentsRequest,
} from '@app/application/main/cqrs/analysis';
import { Body, Controller, Get, Post, Query, Version } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Documents')
@Controller('Documents')
export class DocumentsController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  // @Post('documents')
  // async getDocumentsList(@Body() body: GetDocumentsRequest) {
  //   return await this.queryBus.execute(new GetDocumentsQuery(body));
  // }
  @Version('1')
  @Get('/findByFilter?')
  async getDocumentsList(
    @Query('username') username: string,
    @Query('company') company: string,
    @Query('id') id: number,
  ) {
    const request: GetDocumentsRequest = {
      Compania: company,
      IdColaProcesamiento: id,
      Usuario: username,
    };
    return await this.queryBus.execute(new GetDocumentsQuery(request));
  }
}
