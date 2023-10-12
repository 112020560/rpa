/* eslint-disable prettier/prettier */
import { CommonRequest } from "@app/application/common/common.request";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";


export class GetCaptchaRequest extends CommonRequest {

    @ApiProperty()
    @IsNumber()
    retorno_json: number;
}