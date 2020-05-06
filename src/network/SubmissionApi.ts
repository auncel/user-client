/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 21st April 2020 8:31 pm                            *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 21st April 2020 8:31 pm                           *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import { AxiosRequestConfig } from 'axios';
import HttpRequest from './HttpRequest';
import HostMap from './hostMap';
import { IReponseResult } from './ResponseResult';
import { SubmissionDto } from '../domain';
import { Get } from './decorator';

export default class SubmissionApi extends HttpRequest {
  baseURL = HostMap.Default;

  @Get()
  getByUser(config: AxiosRequestConfig): Promise<IReponseResult<SubmissionDto[]>> {
    return {} as Promise<IReponseResult<SubmissionDto[]>>;
  }

  @Get()
  getHeatMap(config: AxiosRequestConfig): Promise<IReponseResult<Record<string, number>>> {
    return {} as Promise<IReponseResult<Record<string, number>>>;
  }
}
