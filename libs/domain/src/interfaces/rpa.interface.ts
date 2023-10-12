/* eslint-disable prettier/prettier */
import { BurTraSolicitud, RpaModel } from "../models";

export interface IRpaDomain {
    getRpqQueueAsync(rpaModel: RpaModel): Promise<Array<BurTraSolicitud>>
    updateRpaQueueAsync(rpaModel: RpaModel): Promise<any>
}