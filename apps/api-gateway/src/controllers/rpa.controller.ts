/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Version } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { GetQueueDto } from "../dtos/rpa/getqueue.dto";
import { RpaService } from "../services/rpa.service";
import { UpdateQueueDto } from '../dtos/rpa/updatequeue.dto';
import { GetCaptchaDto } from "../dtos/rpa/getcaptcha.dto";
import { SetCaptchaDto } from "../dtos/rpa/setcaptcha.dto";

@ApiTags('rpa-gateway')
@Controller('rpa')
export class RpaContrller {
    constructor(private readonly rpaService: RpaService) { }

    @ApiOperation({ description: 'Gets the work queue for the RPA.' })
    @Version('1')
    @Post('getqueue')
    async getQueueAsync(@Body() body: GetQueueDto) {
        return this.rpaService.getQueue(body);
    }


    @ApiOperation({ description: 'Update the record already worked by the RPA.' })
    @Version('1')
    @Post('updatequeue')
    async updateQueueAsync(@Body() body: UpdateQueueDto) {
        return this.rpaService.updateQueue(body);
    }


    @ApiOperation({ description: 'Provides a captcha object to be used by RPA.' })
    @Version('1')
    @Post('getcaptcha')

    async getCaptcha(@Body() body: GetCaptchaDto) {
        return this.rpaService.getCaptcha(body);
    }


    @ApiOperation({ description: 'Change the state of the captcha object once it has been used.' })
    @Version('1')
    @Post('setcaptcha')
    async updateRpaRequestAsync(@Body() body: SetCaptchaDto) {
        return this.updateRpaRequestAsync(body);
    }

}
