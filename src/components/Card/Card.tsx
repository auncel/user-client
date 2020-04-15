/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 15th April 2020 5:56 pm                          *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 15th April 2020 5:56 pm                         *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import classnames from 'classnames';
import styles from './style.module.scss';

export interface ICardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Card = (props: ICardProps) => {
  const { title, children, className } = props;
  return (
    <div className={classnames(styles.acCompCard, className)}>
      <h3 className={styles.acCompCardTitle}>{title}</h3>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Card;
