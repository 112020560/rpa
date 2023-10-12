/* eslint-disable prettier/prettier */
import { IQuery } from '@nestjs/cqrs';
export class GetGenericCatalogQuery implements IQuery {
    constructor(public readonly companyId: string,
        public readonly key001: string,
        public readonly key004: string,) { }
}