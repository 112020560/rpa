/* eslint-disable prettier/prettier */
export interface BurTraSolicitudDocument {
    FileName: string | null;
    FileContent: string | null;
}

export interface BurTraSolicitud {
    PK_BUR_TRA_SOLICITUD: number;
    IDENTIFICADOR: string | null;
    FK_BUR_TRA_COLA_PROCESAMIENTO: number;
    DATOS_ARCHIVOS: string | null;
    Base4StringFile: BurTraSolicitudDocument[] | null;
}

