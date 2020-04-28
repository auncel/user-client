/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Saturday, 4th April 2020 1:27 pm                            *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Saturday, 4th April 2020 1:27 pm                           *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './base.module.scss';
import { Header } from '../components';

export interface IBaseLayoutProps {
  children: React.ReactChild;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = (props) => {
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
      <div className={styles.acLayoutFooter}>
        <div>
          <a href="http://www.beian.miit.gov.cn">渝ICP备16013255号-4</a>
          <span>Copyright © 2020 Dov Yih</span>
        </div>
      </div>
    </div>
  );
};
