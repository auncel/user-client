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
import { UserContestDto } from '../domain';
import { Get } from './decorator';

export default class ContestApi extends HttpRequest {
  baseURL = HostMap.Default;

  @Get()
  getByUser(config: AxiosRequestConfig): Promise<IReponseResult<UserContestDto[]>> {
    return {} as Promise<IReponseResult<UserContestDto[]>>;
  }
}
