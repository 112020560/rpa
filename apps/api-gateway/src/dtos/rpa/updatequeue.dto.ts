/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { RpaCommonDto } from '../common/rpacommon.dto';

export class UpdateQueueDto extends RpaCommonDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id_solicitud?: string | null;
    @ApiProperty()
    aplica_tabla_temporal: number;
    @ApiProperty()
    id_cola_procesamiento: number;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id_tipo_identificacion?: string | null;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id_estado?: string | null;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    prioridad?: string | null;
    @ApiProperty()
    @IsString()
    identificador?: string | null;
}