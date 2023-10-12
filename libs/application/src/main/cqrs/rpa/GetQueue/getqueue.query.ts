/* eslint-disable prettier/prettier */
import { IQuery } from '@nestjs/cqrs';
import { GetQueueRequest } from './getqueuerequest';
export class GetQueueQuery implements IQuery {
    constructor(public readonly request: GetQueueRequest) {}
}