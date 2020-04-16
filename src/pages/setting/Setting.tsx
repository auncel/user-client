/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 16th April 2020 4:18 pm                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 16th April 2020 4:18 pm                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { Col, Row } from 'antd';
import { Route } from 'react-router-dom';
import SettingCard from './components/SettingCard';
import styles from './styles.module.scss';
import AvatarSetting from './components/AvatarSetting';
import PublicInfoSetting from './components/PublicInfoSetting';
import AccountSetting from './components/AccountSetting';
import SecurityLog from './components/SecurityLog';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISettingProps {

}

export const Setting = (props: ISettingProps) => {
  console.log();
  return (
    <Row className={styles.setting}>
      <Col span={8}>
        <SettingCard />
      </Col>
      <Col span={16}>
        <Route
          path="/setting/profile"
          render={() => (
            <>
              <AvatarSetting />
              <PublicInfoSetting username="yidafu" />
            </>
          )}
        />

        <Route
          path="/setting/account"
          render={() => (
            <AccountSetting username="yidafu" />
          )}
        />

        <Route
          path="/setting/security-log"
          render={() => (
            <SecurityLog />
          )}
        />
      </Col>
    </Row>
  );
};

export default Setting;
