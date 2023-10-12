/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RpaCommonDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  usuario?: string | null;

  @ApiProperty()
  @IsInt()
  modo_ejecucion: number;

  @ApiProperty()
  @IsInt()
  opcion: number;

  @ApiProperty()
  @IsString()
  id_externo?: string | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id_rpa?: string | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descripcion_rpa?: string | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id_servicio?: string | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id_compania?: string | null;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  id_interfaz?: string | null;
}
