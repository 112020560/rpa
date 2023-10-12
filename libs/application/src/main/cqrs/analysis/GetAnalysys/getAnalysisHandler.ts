/* eslint-disable prettier/prettier */
import { IAnalysisDomain } from "@app/domain/interfaces/analysis.interface";
import { SolicitudeDataModel, SolicitudeModel } from "@app/domain/models";
import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAnalysisQuery } from "./getanalysis.query";

@QueryHandler(GetAnalysisQuery)
export class GetAnalysisHandler implements IQueryHandler<GetAnalysisQuery, Array<SolicitudeDataModel>>{
    constructor(
        @Inject('IAnalysisDomain')
        private readonly analysis: IAnalysisDomain
    ) {}
    async execute(query: GetAnalysisQuery): Promise<SolicitudeDataModel[]> {
        const requestModel: SolicitudeModel = {
            P_USUARIO: query.request.usuario,
            P_FECHA_FIN: query.request.fechaFin,
            P_FECHA_INICIO: query.request.fechaInicio,
            P_CODIGO_CARGA_BLOQUE: query.request.bloque,
            P_IDENTIFICADOR_EXTERNO: query.request.identificadorExterno,
            P_INDENTIFICADOR: query.request.identificacion,
            P_INDENTIFICADOR_TIPO_IDENTIFICACION: query.request.tipoIdentificacion,
            P_INDENTIFICADOR_COMPANIA: query.request.identificadorCompania,
            P_INDENTIFICADOR_INTERFAZ: query.request.identificadorInterfaz,
            P_INDENTIFICADOR_SERVICIO: query.request.identificadorServicio,
        };

        return await this.analysis.GetFinancialRequestListAsync(requestModel);
    }
}