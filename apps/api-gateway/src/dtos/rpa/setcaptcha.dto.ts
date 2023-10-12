/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { RpaCommonDto } from '../common/rpacommon.dto';

export class SetCaptchaDto extends RpaCommonDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id_proveedor?: string | null;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id_captcha?: number
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    estado?: string | null;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    datos_proveedor?: string | null
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id_asignacion?: string | null
    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    fecha_inicio_resolucion: Date
    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    fecha_fin_resolucion: Date
}