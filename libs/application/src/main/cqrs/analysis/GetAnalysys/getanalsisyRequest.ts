/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class AnalysisRequest {
  @ApiProperty()
  usuario: string | null;
  @ApiProperty()
  identificadorExterno: string | null;
  @ApiProperty()
  identificadorServicio: string | null;
  @ApiProperty()
  identificadorInterfaz: string | null;
  @ApiProperty()
  identificadorCompania: string | null;
  @ApiProperty()
  tipoIdentificacion: string | null;
  @ApiProperty()
  identificacion: string | null;
  @ApiProperty()
  bloque: string | null;
  @ApiProperty()
  fechaInicio: Date;
  @ApiProperty()
  fechaFin: Date;
}
