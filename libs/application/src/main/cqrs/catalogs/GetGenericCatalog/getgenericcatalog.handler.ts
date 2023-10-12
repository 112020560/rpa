/* eslint-disable prettier/prettier */
import { IParametersDomain } from '@app/domain/interfaces/parameters.interface';
import { GenericCatalogModel } from '@app/domain/models';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetGenericCatalogQuery } from './getgenericcatalog.query';

@QueryHandler(GetGenericCatalogQuery)
export class GetGenericCatalogHandler implements IQueryHandler<GetGenericCatalogQuery, Array<GenericCatalogModel>>{
    constructor(
        @Inject('IParametersDomain')
        private readonly parametersDomain: IParametersDomain
    ){}
    async execute(query: GetGenericCatalogQuery): Promise<GenericCatalogModel[]> {
        return await this.parametersDomain.getGenericTypeCatalogAsync(query.companyId, query.key001, query.key004);
    }
}