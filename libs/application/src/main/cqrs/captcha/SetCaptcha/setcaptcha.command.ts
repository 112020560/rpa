/* eslint-disable prettier/prettier */
import { ICommand } from '@nestjs/cqrs';
import { SetCaptchaRequest } from './setcaptcha.request';
export class SetCaptchaComman implements ICommand {
  constructor(public readonly request: SetCaptchaRequest) {}
}