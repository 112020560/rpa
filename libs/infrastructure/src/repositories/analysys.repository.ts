/* eslint-disable prettier/prettier */
import { AnalysisModel, AnalysisResponse, SolicitudeDataModel, SolicitudeModel } from '@app/domain/models';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sql from 'mssql';
import { IAnalysisRepository } from '../interfaces/analisys.interface'

@Injectable()
export class AnalysisRepository implements IAnalysisRepository {
    private readonly sqlConfig: sql.config;

    constructor(configService: ConfigService) {
        this.sqlConfig = configService.get<sql.config>('database');
        //console.log(this.sqlConfig)
    }

    public async ProcessAnalysisAsync(analysisModel: AnalysisModel): Promise<Array<AnalysisResponse>> {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_APLICA_CARGA_BLOQUE', analysisModel.P_APLICA_CARGA_BLOQUE);
        request.input('P_CODIGO_CARGA_BLOQUE', analysisModel.P_MODO_EJECUCION);
        request.input('P_CODIGO_REFERENCIA_EXTERNO', analysisModel.P_OPCION);
        request.input('P_CODIGO_ORIGEN_EXTERNO', analysisModel.P_CODIGO_ORIGEN_EXTERNO)
        request.input('P_DATOS_EXTERNOS_JSON', analysisModel.P_IDENTIFICADOR_EXTERNO);
        request.input('P_IDENTIFICADOR', analysisModel.P_INDENTIFICADOR_SERVICIO);
        request.input('P_IDENTIFICADOR_EXTERNO', analysisModel.P_IDENTIFICADOR_EXTERNO);
        request.input('P_INDENTIFICADOR_COMPANIA', analysisModel.P_INDENTIFICADOR_COMPANIA);
        request.input('P_INDENTIFICADOR_INTERFAZ', analysisModel.P_INDENTIFICADOR_INTERFAZ);
        request.input('P_INDENTIFICADOR_SERVICIO', analysisModel.P_INDENTIFICADOR_SERVICIO);
        request.input('P_INDENTIFICADOR_TIPO_IDENTIFICACION', analysisModel.P_INDENTIFICADOR_TIPO_IDENTIFICACION)
        request.input('P_MODO_EJECUCION', analysisModel.P_MODO_EJECUCION)
        request.input('P_OBSERVACION', analysisModel.P_OBSERVACION)
        request.input('P_OPCION', analysisModel.P_OPCION)
        request.input('P_PK_BUR_TRA_COLA_PROCESAMIENTO', analysisModel.P_PK_BUR_TRA_COLA_PROCESAMIENTO)
        request.input('P_PRIORIDAD', analysisModel.P_PRIORIDAD)
        request.input('P_USUARIO', analysisModel.P_USUARIO)

        const result = await request.execute<AnalysisResponse[]>('PA_MAN_BUR_TRA_COLA_PROCESAMIENTO');
        await pool.close();
        return result.recordset;
    }

    public async ProcessMasiveAnalysisAsync(analysisModels: AnalysisModel[]): Promise<any[]> {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();

        const responses = [];
        for (let index = 0; index < analysisModels.length; index++) {
            try {
                console.log(`Procesando ${index}`);
                const request = pool.request();

                request.input('P_APLICA_CARGA_BLOQUE', analysisModels[index].P_APLICA_CARGA_BLOQUE);
                request.input('P_CODIGO_CARGA_BLOQUE', analysisModels[index].P_MODO_EJECUCION);
                request.input('P_CODIGO_REFERENCIA_EXTERNO', analysisModels[index].P_OPCION);
                request.input('P_CODIGO_ORIGEN_EXTERNO', analysisModels[index].P_CODIGO_ORIGEN_EXTERNO)
                request.input('P_DATOS_EXTERNOS_JSON', analysisModels[index].P_IDENTIFICADOR_EXTERNO);
                request.input('P_IDENTIFICADOR', analysisModels[index].P_INDENTIFICADOR_SERVICIO);
                request.input('P_IDENTIFICADOR_EXTERNO', analysisModels[index].P_IDENTIFICADOR_EXTERNO);
                request.input('P_INDENTIFICADOR_COMPANIA', analysisModels[index].P_INDENTIFICADOR_COMPANIA);
                request.input('P_INDENTIFICADOR_INTERFAZ', analysisModels[index].P_INDENTIFICADOR_INTERFAZ);
                request.input('P_INDENTIFICADOR_SERVICIO', analysisModels[index].P_INDENTIFICADOR_SERVICIO);
                request.input('P_INDENTIFICADOR_TIPO_IDENTIFICACION', analysisModels[index].P_INDENTIFICADOR_TIPO_IDENTIFICACION)
                request.input('P_MODO_EJECUCION', analysisModels[index].P_MODO_EJECUCION)
                request.input('P_OBSERVACION', analysisModels[index].P_OBSERVACION)
                request.input('P_OPCION', analysisModels[index].P_OPCION)
                request.input('P_PK_BUR_TRA_COLA_PROCESAMIENTO', analysisModels[index].P_PK_BUR_TRA_COLA_PROCESAMIENTO)
                request.input('P_PRIORIDAD', analysisModels[index].P_PRIORIDAD)
                request.input('P_USUARIO', analysisModels[index].P_USUARIO)

                const result = await request.execute<AnalysisResponse[]>('PA_MAN_BUR_TRA_COLA_PROCESAMIENTO');

                responses.push(result.recordset);

                //console.log('responses', responses );
            } catch (error) {
                responses.push({ Id_Cola: analysisModels[index].P_PK_BUR_TRA_COLA_PROCESAMIENTO, Mensaje: "Error en el proceso", Error: error.message });
            }
            
        }

        await pool.close();
        return responses;
    }

    public async GetPendingAnalisysListAsync(analysisModel: AnalysisModel): Promise<Array<AnalysisResponse>> {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_APLICA_CARGA_BLOQUE', analysisModel.P_APLICA_CARGA_BLOQUE);
        request.input('P_CODIGO_CARGA_BLOQUE', analysisModel.P_MODO_EJECUCION);
        request.input('P_CODIGO_REFERENCIA_EXTERNO', analysisModel.P_OPCION);
        request.input('P_DATOS_EXTERNOS_JSON', analysisModel.P_IDENTIFICADOR_EXTERNO);
        request.input('P_IDENTIFICADOR', analysisModel.P_INDENTIFICADOR_SERVICIO);
        request.input('P_IDENTIFICADOR_EXTERNO', analysisModel.P_INDENTIFICADOR_COMPANIA);
        request.input('P_INDENTIFICADOR_INTERFAZ', analysisModel.P_INDENTIFICADOR_INTERFAZ);
        request.input('P_INDENTIFICADOR_SERVICIO', analysisModel.P_INDENTIFICADOR_SERVICIO);
        request.input('P_INDENTIFICADOR_TIPO_IDENTIFICACION', analysisModel.P_INDENTIFICADOR_TIPO_IDENTIFICACION)
        request.input('P_MODO_EJECUCION', analysisModel.P_MODO_EJECUCION)
        request.input('P_OBSERVACION', analysisModel.P_OBSERVACION)
        request.input('P_OPCION', analysisModel.P_OPCION)
        request.input('P_PK_BUR_TRA_COLA_PROCESAMIENTO', analysisModel.P_PK_BUR_TRA_COLA_PROCESAMIENTO)
        request.input('P_PRIORIDAD', analysisModel.P_PRIORIDAD)
        request.input('P_USUARIO', analysisModel.P_USUARIO)

        const result = await request.execute<AnalysisResponse[]>('PA_MAN_BUR_TRA_COLA_PROCESAMIENTO');
        await pool.close();
        return result.recordset;
    }

    public async GetFinancialRequestListAsync(solicitudModel: SolicitudeModel): Promise<Array<SolicitudeDataModel>> {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_USUARIO', solicitudModel.P_USUARIO);
        request.input('P_IDENTIFICADOR_EXTERNO', solicitudModel.P_IDENTIFICADOR_EXTERNO);
        request.input('P_INDENTIFICADOR_SERVICIO', solicitudModel.P_INDENTIFICADOR_SERVICIO);
        request.input('P_INDENTIFICADOR_INTERFAZ', solicitudModel.P_INDENTIFICADOR_INTERFAZ);
        request.input('P_INDENTIFICADOR_COMPANIA', solicitudModel.P_INDENTIFICADOR_COMPANIA);
        request.input('P_INDENTIFICADOR_TIPO_IDENTIFICACION', solicitudModel.P_INDENTIFICADOR_TIPO_IDENTIFICACION);
        request.input('P_INDENTIFICADOR', solicitudModel.P_INDENTIFICADOR);
        request.input('P_CODIGO_CARGA_BLOQUE', solicitudModel.P_CODIGO_CARGA_BLOQUE);
        request.input('P_FECHA_INICIO', solicitudModel.P_FECHA_INICIO)
        request.input('P_FECHA_FIN', solicitudModel.P_FECHA_FIN)

        const result = await request.execute<SolicitudeDataModel[]>('PA_CON_BUR_TRA_COLA_PROCESAMIENTO');
        await pool.close();
        return result.recordset;
    }
}
