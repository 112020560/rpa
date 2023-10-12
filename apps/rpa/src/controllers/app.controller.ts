/* eslint-disable prettier/prettier */
import { GetCaptchaQuey, SetCaptchaComman, SetCaptchaRequest } from '@app/application/main/cqrs/captcha';
import { GetCaptchaRequest } from '@app/application/main/cqrs/captcha/GetCaptcha/getcaptcha.request';
import { GetQueueQuery } from '@app/application/main/cqrs/rpa';
import { GetQueueRequest } from '@app/application/main/cqrs/rpa/GetQueue/getqueuerequest';
import { UpdateQueueCommand } from '@app/application/main/cqrs/rpa/UpdateQueue/updatequeue.command';
import { UpdateQueueRequest } from '@app/application/main/cqrs/rpa/UpdateQueue/updatequeue.request';
import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { MessagePattern } from '@nestjs/microservices';

//@ApiTags('rpa')
//@Controller('rpa')
@Controller()
export class AppController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) { }

  // @ApiOperation({ description: 'Gets the work queue for the RPA.'})
  // @Version('1')
  // @Post('getqueue')
  @MessagePattern({ cmd: "getqueue" })
  async getQueueAsync(body: GetQueueRequest) {
    return await this.queryBus.execute(new GetQueueQuery(body));
  }

  // @ApiOperation({ description: 'Update the record already worked by the RPA.'})
  // @Version('1')
  // @Post('updatequeue')
  @MessagePattern({ cmd: "updatequeue" })
  async updateQueueAsync(body: UpdateQueueRequest) {
    return await this.commandBus.execute(new UpdateQueueCommand(body));
  }

  // @ApiOperation({description:'Provides a captcha object to be used by RPA.'})
  // @Version('1')
  // @Post('getcaptcha')
  @MessagePattern({ cmd: "getcaptcha" })
  async generateRpaRequestAsync(body: GetCaptchaRequest) {
    return await this.queryBus.execute(new GetCaptchaQuey(body));
  }

  // @ApiOperation({description:'Change the state of the captcha object once it has been used.'})
  // @Version('1')
  // @Post('setcaptcha')
  @MessagePattern({ cmd: "setcaptcha" })
  async updateRpaRequestAsync(body: SetCaptchaRequest) {
    return await this.queryBus.execute(new SetCaptchaComman(body));
  }
}
