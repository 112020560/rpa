/* eslint-disable prettier/prettier */
import { Documents, DocumentsParamsModel } from "../models";

export interface IDocumentDomain {
    GetDocumentListAsync(params: DocumentsParamsModel): Promise<Array<Documents>>;
}