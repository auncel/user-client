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

export enum SUBMISSION_STATUS {
  ACCEPT,
  PADDING,
  PADDING_TIMEOUT,
  JUDGING,
  WRONG_ANWSER,
  RENDER_ERROR,
  SYNTAX_ERROR,
}

interface ISubmissionStatusProps {
  status: SUBMISSION_STATUS;
}

export const SubmissionStatus = (props: ISubmissionStatusProps) => {
  const { status } = props;
  switch (status) {
    case SUBMISSION_STATUS.ACCEPT: {
      return <span className={styles.accept}>Accept</span>;
    }
    case SUBMISSION_STATUS.WRONG_ANWSER:
      return <span className={styles.wrongAnwser}>Wrong Anwser</span>;
    default:
      return <span>Error</span>;
  }
};

export default SubmissionStatus;
