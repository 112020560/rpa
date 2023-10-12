/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Response } from '@app/domain/common/response';
import { AnalysisResponse } from '@app/domain/models';

@Injectable()
export class ProcessResponseService {
    public processResponse<T>(result: Array<AnalysisResponse>): Response<T> {
        if (result && result.length > 0) {
            const tuplaCodgo = result.find(x => x.NOMBRE == 'CODIGO_RESULTADO');
            if (tuplaCodgo) {
                const tuplaMensaje = result.find(a => a.NOMBRE == 'MENSANJE_RESULTADO');
                const valor = tuplaCodgo.VALOR;
                switch (valor) {
                    case '003':
                        return {
                            ResponseCode: valor,
                            ResponseMessage: tuplaMensaje.VALOR,
                            ResponseData: null
                        }
                    case '004':
                        return {
                            ResponseCode: valor,
                            ResponseMessage: tuplaMensaje.VALOR,
                            ResponseData: null
                        }
                    case '001': {
                        const mensajeError = result.find(a => a.NOMBRE == "CODIGO_EXCEPCION");
                        return {
                            ResponseCode: valor,
                            ResponseMessage: tuplaMensaje.VALOR,
                            ResponseTechnicalMessage: mensajeError.VALOR
                        }
                    }
                    case '000': {
                        const quitarCodigo = result.indexOf(tuplaCodgo)
                        const quitarMensaje = result.indexOf(tuplaMensaje);
                        const resultado = result.splice(quitarCodigo, 1);
                        const resultado_final = resultado.splice(quitarMensaje, 1);
                        console.log(resultado_final);
                        return {
                            ResponseCode: valor,
                            ResponseMessage: tuplaMensaje.VALOR,
                            ResponseData: resultado_final as T[]
                        }
                    }
                    default:
                        return {
                            ResponseCode: "001",
                            ResponseMessage: "Codigo de resultado no reconocido",
                            ResponseTechnicalMessage: `Cofigo de resultado ${valor} no esta configurado para ejecutar ninguna accion`
                        }
                }
            }
            return {
                ResponseCode: "001",
                ResponseMessage: "EL RESULTADO NO PRESENTA UNA TUPLA CON EL CODIGO DE RESPUESTA DEL PROCESO",
                ResponseTechnicalMessage: "EL RESULTADO NO PRESENTA UNA TUPLA CON EL CODIGO DE RESPUESTA DEL PROCESO"
            }
        }
        return {
            ResponseCode: "001",
            ResponseMessage: "LA EJECUCION NO OBTUVO RESULTADOS",
            ResponseTechnicalMessage: "LA EJECUCION NO OBTUVO RESULTADOS"
        };
    }
}
