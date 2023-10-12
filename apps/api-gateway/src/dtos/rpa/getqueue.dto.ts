/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { RpaCommonDto } from "../common/rpacommon.dto";

export class GetQueueDto extends RpaCommonDto{
    @ApiProperty()
    @IsString()
    id_solicitud: string;
}
