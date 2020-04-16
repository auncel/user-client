/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 16th April 2020 4:21 pm                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 16th April 2020 4:21 pm                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/Card';
import styles from './setting-card.module.scss';


export const SettingCard = () => (
  <Card title="个人设置" className={styles.settingCard}>
    <ul className={styles.settingList}>
      <li><Link to="/setting/profile">个人信息</Link></li>
      <li><Link to="/setting/account">账号</Link></li>
      <li><Link to="/setting/security-log">安全日志</Link></li>
    </ul>
  </Card>
);

export default SettingCard;
