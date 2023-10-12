/* eslint-disable prettier/prettier */
import { CompanyInterfaceModel, CompanyModel } from "@app/domain/models";


export interface ICompanyRepository {
    getCompanyByIdAsync(companyId: string, serviceid: string): Promise<Array<CompanyModel>>;
}


export interface ICompanyInterfaceRepository {
    getCompanyInterfaceGetAsync(companyId: string, serviceid: string): Promise<Array<CompanyInterfaceModel>>;
}