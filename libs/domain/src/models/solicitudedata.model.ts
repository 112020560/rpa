/* eslint-disable prettier/prettier */
export interface SolicitudeDataModel {
    PK_BUR_TRA_COLA_PROCESAMIENTO: number;
    FK_UTL_CAT_COMPANIA: number;
    COMPANIA: string | null;
    FK_BUR_CAT_SERVICIO: number;
    SERVICIO: string | null;
    FK_BUR_CAT_INTERFACE: number;
    INTERFACE: string | null;
    FK_UTL_CAT_CATALOGO_TIPO_IDENTIFICADOR: number;
    TIPO_IDENTIFICADOR: string | null;
    FECHA_CREACION: Date;
    ESTADO: number;
    CODIGO_REFERENCIA_EXTERNO: string | null;
    CODIGO_ORIGEN_EXTERNO: string | null;
    CODIGO_CARGA_BLOQUE: string | null;
    PRIORIDAD: number;
    IDENTIFICADOR: string | null;
    OBSERVACION: string | null;
    HABILITAR_VISOR_DOCUMENTOS: number;
    HABILITAR_VISOR_REGLAS: number;
}