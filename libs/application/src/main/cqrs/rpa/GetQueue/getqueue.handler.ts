/* eslint-disable prettier/prettier */
import { BurTraSolicitud, RpaModel } from '@app/domain/models';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetQueueQuery } from './getqueue.query';
import { Response } from '@app/domain/common/response'
import { Inject } from '@nestjs/common';
import { IRpaDomain } from '@app/domain/interfaces/rpa.interface';

@QueryHandler(GetQueueQuery)
export class GetQueueHandler implements IQueryHandler<GetQueueQuery, Response<BurTraSolicitud>>{

    constructor(
        @Inject('IRpaDomain')
        private readonly rpaDomain: IRpaDomain
    ){}
    async execute(query: GetQueueQuery): Promise<Response<BurTraSolicitud>> {
        const rpaModel: RpaModel = {
            P_APLICA_TABLA_TEMPORAL: 0,
            P_FK_BUR_TRA_COLA_PROCESAMIENTO: 0,
            P_MODO_EJECUCION: query.request.modo_ejecucion,
            P_DESCRIPCION_RPA: query.request.descripcion_rpa,
            P_IDENTIFICADOR: "",
            P_IDENTIFICADOR_EXTERNO: query.request.id_externo,
            P_OPCION: query.request.opcion,
            P_INDENTIFICADOR_COMPANIA: query.request.id_compania,
            P_INDENTIFICADOR_ESTADO: "",
            P_INDENTIFICADOR_INTERFAZ: "",
            P_INDENTIFICADOR_RPA: query.request.id_rpa,
            P_INDENTIFICADOR_SERVICIO: query.request.id_servicio,
            P_INDENTIFICADOR_TIPO_IDENTIFICACION:"",
            P_PK_BUR_TRA_SOLICITUD: query.request.id_solicitud,
            P_PRIORIDAD: "",
            P_USUARIO: query.request.usuario
        }

        const data = await this.rpaDomain.getRpqQueueAsync(rpaModel);

        return {
            ResponseCode: "00",
            ResponseData: data,
            ResponseMessage : "process OK"
        }
    }
}