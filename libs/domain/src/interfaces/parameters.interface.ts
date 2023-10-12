/* eslint-disable prettier/prettier */
import { CompanyInterfaceModel, CompanyModel, GenericCatalogModel } from "../models";

export interface IParametersDomain {
    getCompanyByIdAsync(companyId: string, serviceid: string): Promise<Array<CompanyModel>> 
    getCompanyInterfaceGetAsync(companyId: string, serviceid: string): Promise<Array<CompanyInterfaceModel>>;
    getGenericTypeCatalogAsync(companyid: string, key001: string, key004: string): Promise<Array<GenericCatalogModel>>;
}