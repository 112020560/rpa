/* eslint-disable prettier/prettier */
import { BurTraSolicitud, CaptchaCountModel, CaptchaRequestModel } from '@app/domain/models';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { GetQueueDto } from '../dtos/rpa/getqueue.dto';
import { Response, GenericResponse } from '@app/domain/common/response';
import { UpdateQueueDto } from '../dtos/rpa/updatequeue.dto';
import { GetCaptchaDto } from '../dtos/rpa/getcaptcha.dto';
import { SetCaptchaDto } from '../dtos/rpa/setcaptcha.dto';

@Injectable()
export class RpaService {
  constructor(
    @Inject('SERVICE_RPA')
    private readonly clientServiceRpa: ClientProxy,
  ) {}
  getQueue(payload: GetQueueDto): Observable<Response<BurTraSolicitud>> {
    const pattern = { cmd: 'getqueue' };
    return this.clientServiceRpa.send<Response<BurTraSolicitud>>(pattern, payload);
  }

  updateQueue(payload: UpdateQueueDto): Observable<GenericResponse<any>> {
    const pattern = { cmd: 'updatequeue' };
    return this.clientServiceRpa.send<GenericResponse<any>>(pattern, payload);
  }

  getCaptcha(payload: GetCaptchaDto): Observable<GenericResponse<CaptchaRequestModel[] | CaptchaCountModel[]>> {
    const pattern = { cmd: 'getcaptcha' };
    return this.clientServiceRpa.send<GenericResponse<CaptchaRequestModel[] | CaptchaCountModel[]>>(pattern, payload);
  }

  updateCaptcha(payload: SetCaptchaDto): Observable<void> {
    const pattern = { cmd: 'setcaptcha' };
    return this.clientServiceRpa.send(pattern, payload);
  }
}
