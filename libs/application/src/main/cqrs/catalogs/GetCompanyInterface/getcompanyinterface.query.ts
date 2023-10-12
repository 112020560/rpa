/* eslint-disable prettier/prettier */
import { IQuery } from '@nestjs/cqrs';
export class GetCompanyInterfaceQuery implements IQuery {
    constructor(public readonly companyId: string, public readonly serviceId: string) {}
}