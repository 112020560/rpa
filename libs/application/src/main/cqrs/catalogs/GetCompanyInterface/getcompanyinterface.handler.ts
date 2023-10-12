/* eslint-disable prettier/prettier */
import { IParametersDomain } from '@app/domain/interfaces/parameters.interface';
import { CompanyInterfaceModel } from '@app/domain/models';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCompanyInterfaceQuery } from './getcompanyinterface.query';

@QueryHandler(GetCompanyInterfaceQuery)
export class GetCompanyInterfaceHandler implements IQueryHandler<GetCompanyInterfaceQuery, Array<CompanyInterfaceModel>> {
    constructor(
        @Inject('IParametersDomain')
        private readonly parameterDomain: IParametersDomain
    ){}
    async execute(query: GetCompanyInterfaceQuery): Promise<CompanyInterfaceModel[]> {
        return await this.parameterDomain.getCompanyInterfaceGetAsync(query.companyId, query.serviceId);
    }
}