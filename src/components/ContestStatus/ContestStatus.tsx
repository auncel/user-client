/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 21st April 2020 9:37 pm                            *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 21st April 2020 9:37 pm                           *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */


import React from 'react';
import { ContestStatus as ContestStatusEnum } from '../../domain';
import styles from './styles.module.scss';


interface IContestStatusProps {
  status: ContestStatusEnum;
}

export const ContestStatus: React.FC<IContestStatusProps> = (props) => {
  const { status } = props;

  // eslint-disable-next-line default-case
  switch (status) {
    case ContestStatusEnum.RUNNING:
      return <span className={styles.contestStatusRunning}>Running</span>;
    case ContestStatusEnum.ENDED:
      return <span className={styles.contestStatusEnded}>Ended</span>;

    case ContestStatusEnum.PENDING:
    default:
      return <span className={styles.contestStatusPending}>Pending</span>;
  }
};
