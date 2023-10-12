/* eslint-disable prettier/prettier */
import { AnalysisModel } from "@app/domain/models";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ProcessAnalysisCommand } from "./process.analysis.command";
import { Response } from '@app/domain/common/response'
import { Inject } from "@nestjs/common";
import { IAnalysisDomain } from "@app/domain/interfaces/analysis.interface";

@CommandHandler(ProcessAnalysisCommand)
export class ProcessAnalysisHandler implements ICommandHandler<ProcessAnalysisCommand, Response<AnalysisModel>>{
    constructor(
        @Inject('IAnalysisDomain')
        private readonly analysis: IAnalysisDomain
    ) { }
    async execute(command: ProcessAnalysisCommand): Promise<Response<AnalysisModel>> {
        const processAnalysisRequest = command.request;
        const processModel: AnalysisModel = {
            P_APLICA_CARGA_BLOQUE: processAnalysisRequest.Referencia_bloque != "" ? 1 : 0,
            P_CODIGO_CARGA_BLOQUE: processAnalysisRequest.Referencia_bloque,
            P_CODIGO_ORIGEN_EXTERNO: processAnalysisRequest.Origen,
            P_CODIGO_REFERENCIA_EXTERNO: processAnalysisRequest.Referencia_externa,
            P_DATOS_EXTERNOS_JSON: processAnalysisRequest.Informacion_adicional,
            P_IDENTIFICADOR: processAnalysisRequest.identificacion,
            P_IDENTIFICADOR_EXTERNO: processAnalysisRequest.Identificador_externo,
            P_INDENTIFICADOR_COMPANIA: processAnalysisRequest.Id_compania,
            P_INDENTIFICADOR_INTERFAZ: processAnalysisRequest.Id_interfaz,
            P_INDENTIFICADOR_SERVICIO: processAnalysisRequest.Id_servicio,
            P_INDENTIFICADOR_TIPO_IDENTIFICACION: processAnalysisRequest.Id_tipo_identificacion,
            P_MODO_EJECUCION: 0,
            P_OBSERVACION: processAnalysisRequest.observacion,
            P_OPCION: processAnalysisRequest.Opcion,
            P_PK_BUR_TRA_COLA_PROCESAMIENTO: processAnalysisRequest.Id_Cola,
            P_PRIORIDAD: processAnalysisRequest.Prioridad,
            P_USUARIO: processAnalysisRequest.Usuario
        }

        console.log('Model', processModel)

        return await this.analysis.ProcessAnalysisAsync(processModel);
    }
}