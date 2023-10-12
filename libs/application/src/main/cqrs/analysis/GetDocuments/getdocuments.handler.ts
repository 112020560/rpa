/* eslint-disable prettier/prettier */
import { IDocumentDomain } from '@app/domain/interfaces/document.interface';
import { DocumentsParamsModel } from '@app/domain/models';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetDocumentsQuery } from './getdocuments.query';
import { GetDocumentsResponse } from './getdocuments.response';

@QueryHandler(GetDocumentsQuery)
export class GetDocumentsHandler implements IQueryHandler<GetDocumentsQuery, GetDocumentsResponse[]>{
    constructor(
        @Inject('IDocumentDomain')
        private readonly _documentDomain: IDocumentDomain
    ) {}
    async execute(query: GetDocumentsQuery): Promise<GetDocumentsResponse[]> {
        const model: DocumentsParamsModel = {
            P_IDENTIFICADOR_EXTERNO: '',
            P_INDENTIFICADOR_COMPANIA: query.input.Compania,
            P_MODO_EJECUCION: 0,
            P_OPCION: 0,
            P_PK_BUR_TRA_COLA_PROCESAMIENTO: query.input.IdColaProcesamiento,
            P_USUARIO: query.input.Usuario
        }
        const response = await this._documentDomain.GetDocumentListAsync(model)
        if(response) {
            return (response.map(docs => ({
                SUSCRIPCION: docs.SUSCRIPCION, 
                CARPETA: docs.CARPETA, 
                COMPANIA: docs.COMPANIA, 
                NOMBRE_DOCUMENTO: docs.NOMBRE_DOCUMENTO, 
                TIPO_CONTENIDO: docs.TIPO_CONTENIDO, 
                TIPO_DOCUMENTO: docs.TIPO_CONTENIDO})))
        }
    }
}