/* eslint-disable no-dupe-class-members */
/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Saturday, 21st December 2019 11:21 am                       *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Saturday, 21st December 2019 11:21 am                      *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2019 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import HostMap from './hostMap';
import { IReponseResult } from './ResponseResult';

export default class HttpRequest {
  client = axios.create({
    timeout: 1000 * 60,
  });

  baseURL = HostMap.Default;

  get name(): string {
    const cstrName = this.constructor.name;
    const uriPrefix = cstrName.slice(0, -3).toLocaleLowerCase();
    return uriPrefix;
  }

  get url(): string {
    return `${this.baseURL}/${this.name}`;
  }

  async get<T>(suffix: string, config?: AxiosRequestConfig): Promise<IReponseResult<T>>;

  async get<T>(config?: AxiosRequestConfig): Promise<IReponseResult<T>> ;

  async get<T>(...args: any[]): Promise<IReponseResult<T>> {
    let config: AxiosRequestConfig;
    /* eslint-disable */
    let url = this.url;
    if (typeof args[0] === 'string') {
      url += `/${args[0]}`;
      
      config = args[1];
    } else {
      config = args[0];
    }
    const resp = await this.client.get(url, { ...config, withCredentials: true });
    if (resp.data.success) {
      return resp.data;
    }
    throw new Error(resp.data.msg);
  }

  public async post<T>(suffix: string, data?: any, config?: AxiosRequestConfig): Promise<IReponseResult<T>>;

  public async post<T>(data?: any, config?: AxiosRequestConfig): Promise<IReponseResult<T>>;

  public async post<T>(...args: any[]): Promise<IReponseResult<T>> {
    let data: any;
    let config: AxiosRequestConfig;
    /* eslint-disable */
    let url = this.url;
    if (typeof args[0] === 'string') {
      url += `/${args[0]}`;
      
      data = args[1];
      config = args[2];
    } else {
      data = args[0];
      config = args[1];
    }

    const resp = await this.client.post(url, data, {...config, withCredentials: true });
    if (resp.data.success) {
      return resp.data;
    }
    throw new Error(resp.data.msg);
  }

  
  public async put<T>(suffix: string, data?: any, config?: AxiosRequestConfig): Promise<IReponseResult<T>>;

  public async put<T>(data?: any, config?: AxiosRequestConfig): Promise<IReponseResult<T>>;

  public async put<T>(...args: any[]): Promise<IReponseResult<T>> {
    let data: any;
    let config: AxiosRequestConfig;
    /* eslint-disable */
    let url = this.url;
    if (typeof args[0] === 'string') {
      url += `/${args[0]}`;
      
      data = args[1];
      config = args[2];
    } else {
      data = args[0];
      config = args[1];
    }

    const resp = await this.client.put(url, data, {...config, withCredentials: true });
    if (resp.data.success) {
      return resp.data;
    }
    throw new Error(resp.data.msg);
  }
}
