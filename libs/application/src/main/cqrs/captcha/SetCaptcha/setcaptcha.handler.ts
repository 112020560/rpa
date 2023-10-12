/* eslint-disable prettier/prettier */
import { ICaptchaDomain } from '@app/domain/interfaces/captcha.interface';
import { CaptchaInputModel } from '@app/domain/models';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SetCaptchaComman } from './setcaptcha.command';

@CommandHandler(SetCaptchaComman)
export class SetCaptchaHandler implements ICommandHandler<SetCaptchaComman, void> {

    constructor(
        @Inject('ICaptchaDomain')
        private readonly captchaDomain: ICaptchaDomain
    ){}
    async execute(command: SetCaptchaComman): Promise<void> {
        const inputModel: CaptchaInputModel = {
            P_FECHA_FIN_RESOLUCION_PROVEEDOR: command.request.fecha_fin_resolucion,
             P_FECHA_INICIO_RESOLUCION_PROVEEDOR: command.request.fecha_inicio_resolucion,
             P_MODO_EJECUCION: command.request.modo_ejecucion,
             P_OPCION: command.request.opcion,
             P_DATOS_PROVEEDOR: command.request.datos_proveedor,
             P_DESCRIPCION_RPA: command.request.descripcion_rpa,
             P_ESTADO: command.request.estado,
             P_IDENTIFICADOR_ASIGNACION: command.request.id_asignacion,
             P_IDENTIFICADOR_EXTERNO: command.request.id_externo,
             P_INDENTIFICADOR_COMPANIA: command.request.id_compania,
             P_INDENTIFICADOR_PROVEEDOR: command.request.id_proveedor,
             P_INDENTIFICADOR_RPA: command.request.id_rpa,
             P_INDENTIFICADOR_SERVICIO: command.request.id_servicio,
             P_PK_BUR_TRA_CAPTCHA: command.request.id_captcha,
             P_USUARIO: command.request.usuario           
        } 
        await this.captchaDomain.setCaptchaAsync(inputModel)
    }
}