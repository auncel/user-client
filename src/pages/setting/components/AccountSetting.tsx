/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 16th April 2020 8:57 pm                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 16th April 2020 8:57 pm                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import React from 'react';
import { Card } from '../../../components/Card';
import ProfileField from './ProfileField';

interface IAccountSettingProps {
  username: string;
  realname?: string;
  slogan?: string;
  school?: string;
}

const AccountSetting = (props: IAccountSettingProps) => {
  const {
    username, realname, slogan, school,
  } = props;
  return (
    <Card title="账号信息" plain>
      <ProfileField title="ID" field="username" value="yidafu" />
      <ProfileField title="邮箱" field="email" value="test@test.com" />
      <ProfileField title="修改秘密" field="password" value="*****" />
    </Card>
  );
};

export default AccountSetting;
