/* eslint-disable prettier/prettier */
import { IParametersDomain } from '@app/domain/interfaces/parameters.interface';
import { CompanyInterfaceModel, CompanyModel, GenericCatalogModel } from '@app/domain/models';
import { ICompanyInterfaceRepository, ICompanyRepository } from '@app/infrastructure/interfaces/company.interface';
import { IGenericTypeRepository } from '@app/infrastructure/interfaces/generictype.interface';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ParametersDomain implements IParametersDomain {
    constructor(
        @Inject('ICompanyRepository')
        private readonly companyRepository: ICompanyRepository,
        @Inject('ICompanyInterfaceRepository')
        private readonly companyInterfaceRepository: ICompanyInterfaceRepository,
        @Inject('IGenericTypeRepository')
        private readonly genericTypeRepository : IGenericTypeRepository
        ){}

    
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        public getCompanyByIdAsync = async (companyId: string, serviceid: string = ''): Promise<Array<CompanyModel>> => {
            return await this.companyRepository.getCompanyByIdAsync(companyId, serviceid)
        }

        public getCompanyInterfaceGetAsync = async (companyId: string, serviceid: string): Promise<Array<CompanyInterfaceModel>> => {
            return await this.companyInterfaceRepository.getCompanyInterfaceGetAsync(companyId, serviceid)
        }

        public async getGenericTypeCatalogAsync(companyid: string, key001: string, key004: string): Promise<Array<GenericCatalogModel>>{
            return await this.genericTypeRepository.getGenericTypeCatalogAsync(companyid, key001, key004)
        }
}
