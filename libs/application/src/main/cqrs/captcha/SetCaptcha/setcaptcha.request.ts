/* eslint-disable prettier/prettier */
import { CommonRequest } from "@app/application/common/common.request";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate } from "class-validator";

export class SetCaptchaRequest extends CommonRequest {
    
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