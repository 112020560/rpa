/* eslint-disable prettier/prettier */
import { CaptchaCountModel, CaptchaInputModel, CaptchaRequestModel } from "../models";

export interface ICaptchaDomain {
    getCaptchaAsync(captchaInput: CaptchaInputModel): Promise<CaptchaRequestModel[] | CaptchaCountModel[]>
    setCaptchaAsync(captchaInput: CaptchaInputModel): Promise<void> ;
}