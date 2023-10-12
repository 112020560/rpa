/* eslint-disable prettier/prettier */
export interface AnalysisModel {
  P_APLICA_CARGA_BLOQUE: number;
  P_CODIGO_CARGA_BLOQUE: string | null;
  P_CODIGO_ORIGEN_EXTERNO: string | null;
  P_CODIGO_REFERENCIA_EXTERNO: string | null;
  P_DATOS_EXTERNOS_JSON: string | null;
  P_IDENTIFICADOR: string | null;
  P_IDENTIFICADOR_EXTERNO: string | null;
  P_INDENTIFICADOR_COMPANIA: string | null;
  P_INDENTIFICADOR_INTERFAZ: string | null;
  P_INDENTIFICADOR_SERVICIO: string | null;
  P_INDENTIFICADOR_TIPO_IDENTIFICACION: string | null;
  P_MODO_EJECUCION: number;
  P_OBSERVACION: string | null;
  P_OPCION: number | null;
  P_PK_BUR_TRA_COLA_PROCESAMIENTO: number;
  P_PRIORIDAD: string | null;
  P_USUARIO: string | null;
}
