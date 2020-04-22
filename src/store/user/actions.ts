/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Monday, 20th April 2020 7:06 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Monday, 20th April 2020 7:06 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import { IUserState, UserActionTypes, INIT_USER } from './types';


export function initUser(user: IUserState): UserActionTypes {
  return {
    type: INIT_USER,
    payload: user,
  };
}
