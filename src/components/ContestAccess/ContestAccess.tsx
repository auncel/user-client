/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 23rd April 2020 4:00 pm                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 23rd April 2020 4:00 pm                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */


import React from 'react';
import { ContestAccessType } from '../../domain';
import AuncelIcon from '../AuncelIcon';

interface IContestAccessProps {
  access: ContestAccessType;
}

export const ContestAccess: React.FC<IContestAccessProps> = (props) => {
  const { access } = props;
  switch (access) {
    case ContestAccessType.PUBLIC:
      return <AuncelIcon type="icon-public" width={12} />;
    case ContestAccessType.PRIVATE:
    default:
      return <AuncelIcon type="icon-private" width={12} />;
  }
};

export default ContestAccess;
