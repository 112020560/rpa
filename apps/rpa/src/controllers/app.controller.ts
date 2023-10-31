/* eslint-disable prettier/prettier */
import { GetCaptchaQuey, SetCaptchaComman, SetCaptchaRequest } from '@app/application/main/cqrs/captcha';
import { GetCaptchaRequest } from '@app/application/main/cqrs/captcha/GetCaptcha/getcaptcha.request';
import { GetQueueQuery, GetQueueRequest, UpdateQueueCommand, UpdateQueueRequest } from '@app/application/main/cqrs/rpa';
import { Controller, Logger } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) { }

  @MessagePattern({ cmd: "getqueue" })
  async getQueueAsync(body: GetQueueRequest) {
    this.logger.log(`Received getqueue request ${JSON.stringify(body)}`);  
    return await this.queryBus.execute(new GetQueueQuery(body));
  }

  @MessagePattern({ cmd: "updatequeue" })
  async updateQueueAsync(body: UpdateQueueRequest) {
    this.logger.log(`Received updatequeue request ${JSON.stringify(body)}`)
    return await this.commandBus.execute(new UpdateQueueCommand(body));
  }

  @MessagePattern({ cmd: "getcaptcha" })
  async generateRpaRequestAsync(body: GetCaptchaRequest) {
    this.logger.log(`Received getcaptcha request ${JSON.stringify(body)}`)
    return await this.queryBus.execute(new GetCaptchaQuey(body));
  }

  @MessagePattern({ cmd: "setcaptcha" })
  async updateRpaRequestAsync(body: SetCaptchaRequest) {
    this.logger.log(`Received setcaptcha request ${JSON.stringify(body)}`)
    return await this.queryBus.execute(new SetCaptchaComman(body));
  }
}
