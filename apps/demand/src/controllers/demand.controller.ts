/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Controller()
export class DemandController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  // @Get()
  // getHello(): string {
  //   return this.demandService.getHello();
  // }
  // @Post()
  // async generateRpaRequestAsync(@Body() ) {

  // }
}
