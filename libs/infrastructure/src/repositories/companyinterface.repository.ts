/* eslint-disable prettier/prettier */
import { ConfigService } from '@nestjs/config';
import * as sql from 'mssql';
import { Injectable, Logger } from '@nestjs/common';
import { ICompanyInterfaceRepository } from '../interfaces/company.interface';
import { CompanyInterfaceModel } from '@app/domain/models';

@Injectable()
export class CompanyInterfaceRepository implements ICompanyInterfaceRepository{
    private readonly logger = new Logger(CompanyInterfaceRepository.name);
    private readonly sqlConfig: sql.config;

    constructor(configService: ConfigService) {
        this.sqlConfig = configService.get<sql.config>('database');
        console.log(this.sqlConfig)
    }

    public getCompanyInterfaceGetAsync = async (companyId: string, serviceid: string): Promise<Array<CompanyInterfaceModel>> => {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_INDENTIFICADOR_SERVICIO', serviceid);
        request.input('P_INDENTIFICADOR_COMPANIA', companyId);

        this.logger.log(`Procedimiento: PA_CON_UTL_CAT_COMPANIA_INTERFACE => Parametros: `, request.parameters);

        const result = await request.execute<CompanyInterfaceModel[]>('PA_CON_UTL_CAT_COMPANIA_INTERFACE');

        await pool.close();
        return result.recordset;
    }
}
