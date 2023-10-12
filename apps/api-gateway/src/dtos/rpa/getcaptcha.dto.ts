/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { RpaCommonDto } from "../common/rpacommon.dto";

export class GetCaptchaDto extends RpaCommonDto{
    @ApiProperty()
    @IsNumber()
    retorno_json: number;
}