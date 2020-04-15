/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Friday, 3rd April 2020 10:17 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Friday, 3rd April 2020 10:17 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { Image } from '../Image';
import haderConfig from '../../config/header';
import horizontalLogo from '../../assets/images/horizontal-logo.png';
import bellImg from '../../assets/images/bell.png';
import userImg from '../../assets/images/user.png';

export const Header: React.FC = (props) => {
  console.log();
  return (
    <nav className={styles.acHeader}>
      <div className={styles.acHeaderContainer}>
        <div className={styles.acHeaderLeft}>
          <Image width={120} src={horizontalLogo} alt="图标" />
          <ul>
            {haderConfig.map((config) => (
              <li><Link to={config.url}>{config.title}</Link></li>
            ))}
            <li />
          </ul>
        </div>
        <div className={styles.acHeaderRight}>
          <Image src={bellImg} alt="最新消息" width={20} />
          <Link to="/u/yidafu">
            <Image src={userImg} alt="头像" width={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
