/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 15th April 2020 10:51 pm                         *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 15th April 2020 10:51 pm                        *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import styles from './styles.module.scss';
import { SubmissionStatus as SubmissionStatusEnum } from '../../enum';


interface ISubmissionStatusProps {
  status: SubmissionStatusEnum;
}

export const SubmissionStatus = (props: ISubmissionStatusProps) => {
  const { status } = props;
  switch (status) {
    case SubmissionStatusEnum.ACCEPT: {
      return <span className={styles.accept}>Accept</span>;
    }
    case SubmissionStatusEnum.WRONG_ANWSER:
      return <span className={styles.wrongAnwser}>Wrong Anwser</span>;
    default:
      return <span>Error</span>;
  }
};

export default SubmissionStatus;
