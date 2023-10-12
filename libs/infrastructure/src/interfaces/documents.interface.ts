/* eslint-disable prettier/prettier */
import { Documents, DocumentsParamsModel } from "@app/domain/models";


export interface IDocumentsRepository{
    GetDocumentListAsync(params: DocumentsParamsModel): Promise<Array<Documents>>
}