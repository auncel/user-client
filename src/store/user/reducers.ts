/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Monday, 20th April 2020 7:08 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Monday, 20th April 2020 7:08 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import { IUserState, UserActionTypes, INIT_USER } from './types';

const initailState: IUserState = {

};


export function userReducer(state = initailState, action: UserActionTypes): IUserState {
  switch (action.type) {
    case INIT_USER: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
