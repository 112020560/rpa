/* eslint-disable prettier/prettier */
import { ICaptchaDomain } from '@app/domain/interfaces/captcha.interface';
import { CaptchaCountModel, CaptchaInputModel, CaptchaRequestModel } from '@app/domain/models';
import { ICaptchaRepository } from '@app/infrastructure/interfaces/captcha.interface';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CaptchaDomain implements ICaptchaDomain {
    constructor(
        @Inject('ICaptchaRepository')
        private readonly captchaRepository: ICaptchaRepository
    ) { }

    public async getCaptchaAsync(captchaInput: CaptchaInputModel): Promise<CaptchaRequestModel[] | CaptchaCountModel[]> {
        return await this.captchaRepository.getCaptchaAsync(captchaInput);
    }

    public async setCaptchaAsync(captchaInput: CaptchaInputModel): Promise<void> {
        await this.captchaRepository.setCaptchaAsync(captchaInput);
    }
}
