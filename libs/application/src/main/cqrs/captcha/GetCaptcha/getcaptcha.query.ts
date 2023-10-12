/* eslint-disable prettier/prettier */
import { IQuery } from '@nestjs/cqrs';
import { GetCaptchaRequest } from './getcaptcha.request';
export class GetCaptchaQuey implements IQuery {
    constructor(public readonly request: GetCaptchaRequest) { }
}