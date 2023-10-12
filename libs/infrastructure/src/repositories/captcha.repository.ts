/* eslint-disable prettier/prettier */
import { CaptchaCountModel, CaptchaRequestModel } from '@app/domain/models';
import { CaptchaInputModel } from '@app/domain/models/captcha.input.model';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sql from 'mssql';
import { ICaptchaRepository } from '../interfaces/captcha.interface';

@Injectable()
export class CaptchaRepository implements ICaptchaRepository {
    private readonly logger = new Logger(CaptchaRepository.name);
    private readonly sqlConfig: sql.config;

    constructor(configService: ConfigService) {
        this.sqlConfig = configService.get<sql.config>('database');
        console.log(this.sqlConfig)
    }

    public async getCaptchaAsync(captchaInput: CaptchaInputModel): Promise<CaptchaRequestModel[] | CaptchaCountModel[]> {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_USUARIO', captchaInput.P_USUARIO);
        request.input('P_MODO_EJECUCION', captchaInput.P_MODO_EJECUCION);
        request.input('P_OPCION', captchaInput.P_OPCION);
        request.input('P_IDENTIFICADOR_EXTERNO', captchaInput.P_IDENTIFICADOR_EXTERNO);
        request.input('P_INDENTIFICADOR_RPA', captchaInput.P_INDENTIFICADOR_RPA);
        request.input('P_DESCRIPCION_RPA', captchaInput.P_DESCRIPCION_RPA);
        request.input('P_INDENTIFICADOR_SERVICIO', captchaInput.P_INDENTIFICADOR_SERVICIO);
        request.input('P_INDENTIFICADOR_COMPANIA', captchaInput.P_INDENTIFICADOR_COMPANIA);
        //request.input('RetornoJson');

        this.logger.log(`Procedimiento: PA_CON_BUR_TRA_CAPTCHA => Parametros: `, request.parameters);

        const result = await request.execute<any[]>('PA_CON_BUR_TRA_CAPTCHA');

        await pool.close();
        return result.recordset;
    }


    public async setCaptchaAsync(captchaInput: CaptchaInputModel): Promise<void> {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_USUARIO', captchaInput.P_USUARIO);
        request.input('P_MODO_EJECUCION', captchaInput.P_MODO_EJECUCION);
        request.input('P_OPCION', captchaInput.P_OPCION);
        request.input('P_IDENTIFICADOR_EXTERNO', captchaInput.P_IDENTIFICADOR_EXTERNO);
        request.input('P_INDENTIFICADOR_SERVICIO', captchaInput.P_INDENTIFICADOR_SERVICIO);
        request.input('P_INDENTIFICADOR_COMPANIA', captchaInput.P_INDENTIFICADOR_COMPANIA);
        request.input('P_INDENTIFICADOR_RPA', captchaInput.P_INDENTIFICADOR_RPA);
        request.input('P_DESCRIPCION_RPA', captchaInput.P_DESCRIPCION_RPA);
        request.input('P_INDENTIFICADOR_PROVEEDOR', captchaInput.P_INDENTIFICADOR_PROVEEDOR);
        request.input('P_PK_BUR_TRA_CAPTCHA', captchaInput.P_PK_BUR_TRA_CAPTCHA);
        request.input('P_ESTADO', captchaInput.P_ESTADO);
        request.input('P_DATOS_PROVEEDOR', captchaInput.P_DATOS_PROVEEDOR);
        request.input('P_IDENTIFICADOR_ASIGNACION', captchaInput.P_IDENTIFICADOR_ASIGNACION);
        request.input('P_FECHA_INICIO_RESOLUCION_PROVEEDOR', captchaInput.P_FECHA_INICIO_RESOLUCION_PROVEEDOR);
        request.input('P_FECHA_FIN_RESOLUCION_PROVEEDOR', captchaInput.P_FECHA_FIN_RESOLUCION_PROVEEDOR);

        this.logger.log(`Procedimiento: PA_MAN_BUR_TRA_CAPTCHA => Parametros: `, request.parameters);

        await request.execute('PA_MAN_BUR_TRA_CAPTCHA');

        await pool.close();
    }
}
