/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Sunday, 19th April 2020 3:45 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Sunday, 19th April 2020 3:45 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import React from 'react';
import styles from './paved.module.scss';
import { Header } from '../components';

export interface IBaseLayoutProps {
  children: React.ReactChild;
}

export const PavedLayout: React.FC<IBaseLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className={styles.acLayout}>
      <div className={styles.acLayoutHeader}>
        <Header />
      </div>
      <div className={styles.acLayoutBody}>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
