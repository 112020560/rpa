/* eslint-disable prettier/prettier */
import { IQuery } from '@nestjs/cqrs';
export class GetServiceByCompanyQuery implements IQuery {
    constructor(public readonly id: string) {}
}