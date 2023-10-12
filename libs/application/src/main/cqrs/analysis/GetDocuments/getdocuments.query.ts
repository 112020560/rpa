/* eslint-disable prettier/prettier */
import { IQuery } from '@nestjs/cqrs';
import { GetDocumentsRequest } from './getdocuments.request';
export class GetDocumentsQuery implements IQuery {
    constructor(public readonly input: GetDocumentsRequest) {}
}