/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Sunday, 15th December 2019 10:34 pm                         *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Sunday, 15th December 2019 10:34 pm                        *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2019 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
/* eslint-disable constructor-super */
/* eslint-disable no-empty-function */

import 'reflect-metadata';
import HttpRequest from './HttpRequest';
import HostMap from './hostMap';
import { IReponseResult } from './ResponseResult';
import { Post } from './decorator';

export interface IUserParams {
  username?: string;
  password?: string;
  email?: string;
}


export default class UserApi extends HttpRequest {
  baseURL = HostMap.Default;

  @Post()
  login<T>(data: IUserParams): Promise<IReponseResult<T>> {
    return {} as Promise<IReponseResult<T>>;
  }

  @Post()
  register<T>(data: IUserParams): Promise<IReponseResult<T>> {
    return {} as Promise<IReponseResult<T>>;
  }
}
