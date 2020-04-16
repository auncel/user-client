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
  plain?: boolean;
}

export const Card = (props: ICardProps) => {
  const {
    title, children, className, plain,
  } = props;
  const cardClass = classnames(styles.card, className, { [styles.cardPlain]: !!plain });
  const titleClass = classnames(styles.cardTitle, { [styles.cardTitlePlain]: !!plain });
  return (
    <div className={cardClass}>
      <h3 className={titleClass}>{title}</h3>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Card;
