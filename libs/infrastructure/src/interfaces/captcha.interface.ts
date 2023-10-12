/* eslint-disable prettier/prettier */
import { CaptchaCountModel, CaptchaInputModel, CaptchaRequestModel } from "@app/domain/models";

export interface ICaptchaRepository {
    getCaptchaAsync(captchaInput: CaptchaInputModel): Promise<CaptchaRequestModel[] | CaptchaCountModel[]>;
    setCaptchaAsync(captchaInput: CaptchaInputModel): Promise<void>;
}