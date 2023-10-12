/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class PendingAnalysisRequest {
  @ApiProperty()
  Usuario?: string | null;
  @ApiProperty()
  Opcion?: number;
  @ApiProperty()
  Identificador_externo?: string | null;
  @ApiProperty()
  Id_Cola: number;
  @ApiProperty()
  Id_servicio?: string | null;
  @ApiProperty()
  Id_interfaz?: string | null;
  @ApiProperty()
  Id_compania?: string | null;
  @ApiProperty()
  Id_tipo_identificacion?: string | null;
  @ApiProperty()
  Referencia_externa?: string | null;
  @ApiProperty()
  Origen?: string | null;
  @ApiProperty()
  Referencia_bloque?: string | null;
  @ApiProperty()
  Prioridad?: string | null;
  @ApiProperty()
  Idetificacion?: string | null;
  @ApiProperty()
  observacion?: string | null;
  @ApiProperty()
  Informacion_adicional?: string | null;
  @ApiProperty()
  AwaitResponse: boolean;
}
