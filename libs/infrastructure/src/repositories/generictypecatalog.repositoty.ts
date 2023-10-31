/* eslint-disable prettier/prettier */

import { GenericCatalogModel } from '@app/domain/models';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sql from 'mssql';
import { IGenericTypeRepository } from '../interfaces/generictype.interface';

@Injectable()
export class GenericTypeRepository implements IGenericTypeRepository {
    private readonly logger = new Logger(GenericTypeRepository.name);
    private readonly sqlConfig: sql.config;

    constructor(configService: ConfigService) {
        this.sqlConfig = configService.get<sql.config>('database');
        //console.log(this.sqlConfig)
    }
    
    public async getGenericTypeCatalogAsync(companyid: string, key001: string, key004: string): Promise<Array<GenericCatalogModel>> {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_INDENTIFICADOR_COMPANIA', companyid);
        request.input('P_PK_UTL_CAT_CATALOGO', 0);
        request.input('P_LLAVE01', key001);
        request.input('P_LLAVE02', 'UTL_CAT_CATALOGO');
        request.input('P_LLAVE03', 'FK_UTL_CAT_META_TIPO_CATALOGO');
        request.input('P_LLAVE04', key004);
        request.input('P_LLAVE05', '');
        request.input('P_IDENTIFICADOR', '');
        request.input('P_FK_LLAVE_FORANEA', 0);
        request.input('P_ESTRUCTURA', 'UTL_CAT_CATALOGO')

        this.logger.log(`Procedimiento: PA_CON_UTL_CAT_CATALOGO => Parametros: `, request.parameters);

        const result = await request.execute<GenericCatalogModel[]>('PA_CON_UTL_CAT_CATALOGO');

        await pool.close();
        return result.recordset;
    }
}
