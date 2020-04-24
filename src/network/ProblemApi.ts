/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 23rd April 2020 5:17 pm                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 23rd April 2020 5:17 pm                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import { AxiosRequestConfig } from 'axios';
import HttpRequest from './HttpRequest';
import HostMap from './hostMap';
import { Get } from './decorator';
import { IReponseResult } from './ResponseResult';
import { ProblemDto } from '../domain';

export default class ProblemApi extends HttpRequest {
  baseURL = HostMap.Default;

  @Get()
  getByContest(config: AxiosRequestConfig): Promise<IReponseResult<ProblemDto[]>> {
    return {} as Promise<IReponseResult<ProblemDto[]>>;
  }
}
