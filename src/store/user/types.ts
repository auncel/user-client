/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Monday, 20th April 2020 5:29 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Monday, 20th April 2020 5:29 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
export interface IUserState {
  id?: number;
  username?: string;
  realname?: string;
  avatar?: string;
  slogan?: string;
  role?: number;
  status?: string;
  registerTime?: Date;
  registerIp?: string;
  school?: string;
}


export const INIT_USER = 'INIT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export interface IInitUserAction {
  type: typeof INIT_USER;
  payload: IUserState;
}

export interface IUpdateUserAction {
  type: typeof UPDATE_USER;
  payload: Partial<IUserState>;
}


export type UserActionTypes = IInitUserAction | IUpdateUserAction;
