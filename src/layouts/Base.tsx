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

export interface IBaseLayoutProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactChild;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = (props) => {
  const { header, footer, children } = props;
  return (
    <div className={styles.acLayout}>
      <div className={styles.acLayoutHeader}>
        {header}
      </div>
      <div className={styles.acLayoutBody}>
        {children}
      </div>
      <div className={styles.acLayoutFooter}>
        {footer}
      </div>
    </div>
  );
};
