/* eslint-disable prettier/prettier */
export interface Response<T> {
  ResponseCode?: string | null;
  ResponseMessage?: string | null;
  ResponseData?: T[] | null;
  ResponseTechnicalMessage?: string | null;
}
