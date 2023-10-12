/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/controllers#controllers
*/
import { GetCompanyInterfaceQuery, GetGenericCatalogQuery, GetServiceByCompanyQuery } from '@app/application/main/cqrs/catalogs';
import { Controller, Get, Param, Version } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Parameter')
@Controller('parameters')
export class CatalogController {
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus,
    ) { }

    @Version('1')
    @Get('service/:company')
    async getServiceByCompany(@Param('company') company: string) {
        return await this.queryBus.execute(new GetServiceByCompanyQuery(company))
    }

    @Version('1')
    @Get('interface/:company/:service')
    async getCompanyInterfaceGet(@Param('company') company: string, @Param('service') service: string) {
        return await this.queryBus.execute(new GetCompanyInterfaceQuery(company, service))
    }


    @Version('1')
    @Get('generic/:company/:key01/:key04')
    async getGenericCatalogGet(@Param('company') company: string, @Param('key01') key01: string,  @Param('key01') key04: string) {
        return await this.queryBus.execute(new GetGenericCatalogQuery(company, key01, key04))
    }
}
