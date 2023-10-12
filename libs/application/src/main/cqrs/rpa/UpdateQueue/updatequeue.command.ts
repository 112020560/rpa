/* eslint-disable prettier/prettier */
import { ICommand } from '@nestjs/cqrs';
import { UpdateQueueRequest } from './updatequeue.request';
export class UpdateQueueCommand implements ICommand {
    constructor(public readonly request: UpdateQueueRequest){}
}