/* eslint-disable prettier/prettier */
import { CommonRequest } from "@app/application/common/common.request";
import { ApiProperty } from "@nestjs/swagger"
import {IsString } from "class-validator";



export abstract class GetQueueRequest extends CommonRequest {
    @ApiProperty()
    @IsString()
    id_solicitud: string
}
