/* eslint-disable prettier/prettier */
import { BurTraSolicitud, RpaModel } from "@app/domain/models";

export interface IRpaRepository {
    getRpqQueueAsync(rpaModel: RpaModel): Promise<Array<BurTraSolicitud>>;
    updateRpaQueueAsync(rpaModel: RpaModel): Promise<any>;
} 