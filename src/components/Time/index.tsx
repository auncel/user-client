/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 15th April 2020 10:35 pm                         *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 15th April 2020 10:35 pm                        *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import styles from './styles.module.scss';

interface ITimeProps {
  date: string;
}

export const Time = (props: ITimeProps) => {
  const { date } = props;

  function getPassDate(interval: number): string {
    if (interval < 60) {
      return `${interval}秒前`;
    } if (interval < 3600) {
      return `${interval / 60 | 0}分钟前`;
    } if (interval < 86400) {
      return `${interval / 3600 | 0}小时前`;
    } if (interval < 604800) {
      return `${interval / 86400 | 0}天前`;
    } if (interval < 2419200) {
      return `${interval / 604800 | 0}周前`;
    }
    return dayjs(date).format('YY-MM-DD');
  }

  const passDate = +new Date(date);
  const interval = (+Date.now() - passDate) / 1000;
  const [fromNow, setFromNow] = useState(getPassDate(interval));
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = (+Date.now() - passDate) / 1000;
      setFromNow(getPassDate(interval));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <span className={styles.timeText}>{fromNow}</span>
  );
};

export default Time;
