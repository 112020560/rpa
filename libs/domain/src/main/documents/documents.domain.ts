/* eslint-disable prettier/prettier */
import { IDocumentDomain } from '@app/domain/interfaces/document.interface';
import { Documents, DocumentsParamsModel } from '@app/domain/models';
import { IDocumentsRepository } from '@app/infrastructure/interfaces/documents.interface';
import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DocumentDomain implements IDocumentDomain{
    private readonly logger = new Logger(DocumentDomain.name);

  constructor(
    @Inject('IDocumentsRepository')
    private readonly documentsRepository: IDocumentsRepository
  ) {}

  public async GetDocumentListAsync(params: DocumentsParamsModel): Promise<Array<Documents>> {
    return await this.documentsRepository.GetDocumentListAsync(params);
  }
}
