/* eslint-disable prettier/prettier */
import { BurTraSolicitud, RpaModel } from '@app/domain/models';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sql from 'mssql';
import { IRpaRepository } from '../interfaces/rpa.interface';

@Injectable()
export class RpaRepository implements IRpaRepository {
    private readonly logger = new Logger(RpaRepository.name);
    private readonly sqlConfig: sql.config;

    constructor(configService: ConfigService) {
        this.sqlConfig = configService.get<sql.config>('database');
        //console.log(this.sqlConfig)
    }
  
    public async getRpqQueueAsync(rpaModel: RpaModel): Promise<Array<BurTraSolicitud>> {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_USUARIO', rpaModel.P_USUARIO);
        request.input('P_MODO_EJECUCION', rpaModel.P_MODO_EJECUCION);
        request.input('P_OPCION', rpaModel.P_OPCION);
        request.input('P_IDENTIFICADOR_EXTERNO', rpaModel.P_IDENTIFICADOR_EXTERNO);
        request.input('P_INDENTIFICADOR_RPA', rpaModel.P_INDENTIFICADOR_RPA);
        request.input('P_DESCRIPCION_RPA', rpaModel.P_DESCRIPCION_RPA);
        request.input('P_INDENTIFICADOR_SERVICIO', rpaModel.P_INDENTIFICADOR_SERVICIO);
        request.input('P_INDENTIFICADOR_COMPANIA', rpaModel.P_INDENTIFICADOR_COMPANIA);
        request.input('P_PK_BUR_TRA_SOLICITUD', rpaModel.P_PK_BUR_TRA_SOLICITUD);
        request.input('P_APLICA_TABLA_TEMPORAL', rpaModel.P_APLICA_TABLA_TEMPORAL);

        this.logger.log(`Procedimiento: PA_CON_BUR_TRA_SOLICITUD => Parametros: `, request.parameters);

        const result = await request.execute<BurTraSolicitud[]>('PA_CON_BUR_TRA_SOLICITUD');

        await pool.close();
        return result.recordset;
    }

    public async updateRpaQueueAsync(rpaModel: RpaModel): Promise<any> {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_USUARIO', rpaModel.P_USUARIO);
        request.input('P_MODO_EJECUCION', rpaModel.P_MODO_EJECUCION);
        request.input('P_OPCION', rpaModel.P_OPCION);
        request.input('P_IDENTIFICADOR_EXTERNO', rpaModel.P_IDENTIFICADOR_EXTERNO);
        request.input('P_INDENTIFICADOR_RPA', rpaModel.P_INDENTIFICADOR_RPA);
        request.input('P_DESCRIPCION_RPA', rpaModel.P_DESCRIPCION_RPA);
        request.input('P_INDENTIFICADOR_SERVICIO', rpaModel.P_INDENTIFICADOR_SERVICIO);
        request.input('P_INDENTIFICADOR_COMPANIA', rpaModel.P_INDENTIFICADOR_COMPANIA);
        request.input('P_PK_BUR_TRA_SOLICITUD', rpaModel.P_PK_BUR_TRA_SOLICITUD);
        request.input('P_APLICA_TABLA_TEMPORAL', rpaModel.P_APLICA_TABLA_TEMPORAL);
        request.input('P_FK_BUR_TRA_COLA_PROCESAMIENTO', rpaModel.P_FK_BUR_TRA_COLA_PROCESAMIENTO)
        request.input('P_INDENTIFICADOR_INTERFAZ', rpaModel.P_INDENTIFICADOR_INTERFAZ)
        request.input('P_INDENTIFICADOR_TIPO_IDENTIFICACION', rpaModel.P_INDENTIFICADOR_TIPO_IDENTIFICACION)
        request.input('P_INDENTIFICADOR_ESTADO', rpaModel.P_INDENTIFICADOR_ESTADO)
        request.input('P_PRIORIDAD', rpaModel.P_PRIORIDAD)
        request.input('P_IDENTIFICADOR', rpaModel.P_IDENTIFICADOR)




        this.logger.log(`Procedimiento: PA_MAN_BUR_TRA_SOLICITUD => Parametros: `, request.parameters);

        const result = await request.execute<any>('PA_MAN_BUR_TRA_SOLICITUD');

        await pool.close();
        return result.recordset;
    }
}
