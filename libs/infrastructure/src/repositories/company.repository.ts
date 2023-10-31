/* eslint-disable prettier/prettier */
import { CompanyModel } from '@app/domain/models';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sql from 'mssql';
import { ICompanyRepository } from '../interfaces/company.interface';

@Injectable()
export class CompanyRepository implements ICompanyRepository {
    private readonly logger = new Logger(CompanyRepository.name);
    private readonly sqlConfig: sql.config;

    constructor(configService: ConfigService) {
        this.sqlConfig = configService.get<sql.config>('database');
        //console.log(this.sqlConfig)
    }


    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    public getCompanyByIdAsync = async (companyId: string, serviceid: string = ''): Promise<Array<CompanyModel>> => {
        const pool = new sql.ConnectionPool(this.sqlConfig);
        await pool.connect();
        const request = pool.request();

        request.input('P_INDENTIFICADOR_SERVICIO', serviceid);
        request.input('P_INDENTIFICADOR_COMPANIA', companyId);

        this.logger.log(`Procedimiento: PA_CON_UTL_CAT_COMPANIA_SERVICIO => Parametros: `, request.parameters);

        const result = await request.execute<CompanyModel[]>('PA_CON_UTL_CAT_COMPANIA_SERVICIO');

        await pool.close();
        return result.recordset;
    }
}
