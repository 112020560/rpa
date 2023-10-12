/* eslint-disable prettier/prettier */
import { IParametersDomain } from '@app/domain/interfaces/parameters.interface';
import { CompanyModel } from '@app/domain/models';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetServiceByCompanyQuery } from './getcompany.query';

@QueryHandler(GetServiceByCompanyQuery)
export class GetServiceByCompanyHandler implements IQueryHandler<GetServiceByCompanyQuery,Array<CompanyModel>>{

    constructor(
        @Inject('IParametersDomain')
        private readonly parameterDomain: IParametersDomain
    ){}
    async execute(query: GetServiceByCompanyQuery): Promise<CompanyModel[]> {
        return await this.parameterDomain.getCompanyByIdAsync(query.id, "");
    }
}