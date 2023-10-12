/* eslint-disable prettier/prettier */
import { GenericResponse } from '@app/domain/common/response';
import { IRpaDomain } from '@app/domain/interfaces/rpa.interface';
import { RpaModel } from '@app/domain/models';
import { Inject } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateQueueCommand } from './updatequeue.command';
export class UpdateQueueHandler implements ICommandHandler<UpdateQueueCommand, GenericResponse<any>> {

    constructor(
        @Inject('IRpaDomain')
        private readonly rpaDomain: IRpaDomain
    ) {}
    async execute(command: UpdateQueueCommand): Promise<GenericResponse<any>> {
        const rpaModel: RpaModel = {
            P_APLICA_TABLA_TEMPORAL: command.request.aplica_tabla_temporal,
            P_FK_BUR_TRA_COLA_PROCESAMIENTO: command.request.id_cola_procesamiento,
            P_MODO_EJECUCION: command.request.modo_ejecucion,
            P_OPCION: command.request.opcion,
            P_DESCRIPCION_RPA: command.request.descripcion_rpa,
            P_IDENTIFICADOR: command.request.identificador,
            P_IDENTIFICADOR_EXTERNO:  command.request.id_externo,
            P_INDENTIFICADOR_COMPANIA: command.request.id_compania,
            P_INDENTIFICADOR_ESTADO: command.request.id_estado,
            P_INDENTIFICADOR_INTERFAZ: command.request.id_interfaz,
            P_INDENTIFICADOR_RPA: command.request.id_rpa,
            P_INDENTIFICADOR_SERVICIO: command.request.id_servicio,
            P_INDENTIFICADOR_TIPO_IDENTIFICACION: command.request.id_tipo_identificacion,
            P_PK_BUR_TRA_SOLICITUD: command.request.id_solicitud,
            P_PRIORIDAD: command.request.prioridad,
            P_USUARIO: command.request.usuario
        }

        const data = await this.rpaDomain.updateRpaQueueAsync(rpaModel);

        return {
            ResponseCode: "00",
            ResponseMessage: "process OK",
            ResponseData: data
        }
    }
}