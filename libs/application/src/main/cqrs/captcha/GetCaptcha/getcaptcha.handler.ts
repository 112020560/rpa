/* eslint-disable prettier/prettier */
import { GenericResponse } from '@app/domain/common/response';
import { ICaptchaDomain } from '@app/domain/interfaces/captcha.interface';
import { CaptchaCountModel, CaptchaInputModel, CaptchaRequestModel } from '@app/domain/models';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCaptchaQuey } from './getcaptcha.query';


@QueryHandler(GetCaptchaQuey)
export class GetCaptchaHandler implements IQueryHandler<GetCaptchaQuey, GenericResponse<CaptchaRequestModel[] | CaptchaCountModel[]>> {
    constructor(
        @Inject('ICaptchaDomain')
        private readonly captchaDomain: ICaptchaDomain
    ) { }
    async execute(query: GetCaptchaQuey): Promise<GenericResponse<CaptchaRequestModel[] | CaptchaCountModel[]>> {
        const model: CaptchaInputModel = {
            P_MODO_EJECUCION: query.request.modo_ejecucion,
            P_OPCION: query.request.opcion,
            P_DESCRIPCION_RPA: query.request.descripcion_rpa,
            P_IDENTIFICADOR_EXTERNO: query.request.id_externo,
            P_INDENTIFICADOR_COMPANIA: query.request.id_compania,
            P_INDENTIFICADOR_RPA: query.request.id_rpa,
            P_INDENTIFICADOR_SERVICIO: query.request.id_servicio,
            P_USUARIO: query.request.usuario
        }
        const data = await this.captchaDomain.getCaptchaAsync(model);
        return {
            ResponseCode: "00",
            ResponseData: data,
            ResponseMessage: "process Ok"
        }
    }
}