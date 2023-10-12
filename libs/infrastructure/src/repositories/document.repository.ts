/* eslint-disable prettier/prettier */
import { Documents, DocumentsParamsModel } from '@app/domain/models';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sql from 'mssql';
import { IDocumentsRepository } from '../interfaces/documents.interface';

@Injectable()
export class DocumentsRepository implements IDocumentsRepository {
    private readonly logger = new Logger(DocumentsRepository.name);
    private readonly sqlConfig: sql.config;

    constructor(configService: ConfigService) {
        this.sqlConfig = configService.get<sql.config>('database');
        console.log(this.sqlConfig)
    }

    public async GetDocumentListAsync(params: DocumentsParamsModel): Promise<Array<Documents>> {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_IDENTIFICADOR_EXTERNO', params.P_IDENTIFICADOR_EXTERNO);
        request.input('P_INDENTIFICADOR_COMPANIA', params.P_INDENTIFICADOR_COMPANIA);
        request.input('P_MODO_EJECUCION', params.P_MODO_EJECUCION);
        request.input('P_OPCION', params.P_OPCION);
        request.input('P_PK_BUR_TRA_COLA_PROCESAMIENTO', params.P_PK_BUR_TRA_COLA_PROCESAMIENTO);
        request.input('P_USUARIO', params.P_USUARIO);

        this.logger.log(`Procedimiento: PA_CON_BUR_TRA_COLA_PROCESAMIENTO_DOCUMENTOS => Parametros: `, request.parameters);

        const result = await request.execute<Documents[]>('PA_CON_BUR_TRA_COLA_PROCESAMIENTO_DOCUMENTOS');

        await pool.close();
        return result.recordset;
    }
}
