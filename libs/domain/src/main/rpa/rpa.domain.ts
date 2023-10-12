/* eslint-disable prettier/prettier */
import { IRpaDomain } from '@app/domain/interfaces/rpa.interface';
import { BurTraSolicitud } from '@app/domain/models';
import { IRpaRepository } from '@app/infrastructure/interfaces/rpa.interface';
import { Inject, Injectable } from '@nestjs/common';
import { RpaModel } from '../../models/rpa.model';

@Injectable()
export class RpaDomain implements IRpaDomain {
    constructor(
        @Inject('IRpaRepository')
        private readonly rpaRepository: IRpaRepository
    ){}

    public getRpqQueueAsync = async(rpaModel: RpaModel): Promise<Array<BurTraSolicitud>>  => {
        const datos = await this.rpaRepository.getRpqQueueAsync(rpaModel);
        if(datos) {
            //TODO::
            ///DEBEMOS DE PONER TODA LA LOGICA DE DESCARGA DE ARCHIVOS 
        }
        return datos;
    }

    public async updateRpaQueueAsync(rpaModel: RpaModel): Promise<any>{
        return await this.updateRpaQueueAsync(rpaModel);
    }
}
