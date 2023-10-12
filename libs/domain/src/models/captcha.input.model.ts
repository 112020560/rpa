/* eslint-disable prettier/prettier */
export interface CaptchaInputModel{
    P_USUARIO?: string | null;
    P_MODO_EJECUCION?: number;
    P_OPCION?: number;
    P_IDENTIFICADOR_EXTERNO?: string | null;
    P_INDENTIFICADOR_SERVICIO?: string | null;
    P_INDENTIFICADOR_COMPANIA?: string | null;
    P_INDENTIFICADOR_RPA?: string | null;
    P_DESCRIPCION_RPA?: string | null;
    P_INDENTIFICADOR_PROVEEDOR?: string | null;
    P_PK_BUR_TRA_CAPTCHA?: number
    P_ESTADO?: string | null;
    P_DATOS_PROVEEDOR?: string | null
    P_IDENTIFICADOR_ASIGNACION?: string | null
    P_FECHA_INICIO_RESOLUCION_PROVEEDOR?: Date
    P_FECHA_FIN_RESOLUCION_PROVEEDOR?: Date
}