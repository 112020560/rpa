/* eslint-disable prettier/prettier */
import { GenericCatalogModel } from "@app/domain/models";

export interface IGenericTypeRepository {
    getGenericTypeCatalogAsync(companyid: string, key001: string, key004: string): Promise<Array<GenericCatalogModel>>
}