/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Monday, 27th April 2020 5:20 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Monday, 27th April 2020 5:20 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import { AxiosRequestConfig } from 'axios';
import HttpRequest from './HttpRequest';
import HostMap from './hostMap';
import { Post } from './decorator';
import { IReponseResult } from './ResponseResult';
import { ProblemDto } from '../domain';

export interface IJudgeSubmission {
  problemId: number;
  userId: number;
  html: string;
  style: string;
}


export interface IDiffResult {
  score: number;
  logs: any[];
}

export default class JudgeApi extends HttpRequest {
  baseURL = HostMap.JudgeCenter;

  @Post()
  submit(data: IJudgeSubmission, config?: AxiosRequestConfig): Promise<IReponseResult<IDiffResult>> {
    return {} as Promise<IReponseResult<IDiffResult>>;
  }
}
