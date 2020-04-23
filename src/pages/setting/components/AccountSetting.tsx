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

import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Card } from '../../../components/Card';
import ProfileField from './ProfileField';
import { RootState } from '../../../store';
import UserAuthApi from '../../../network/UserAuthApi';
import { UserAuthDto } from '../../../domain';

const connector = connect((state: RootState) => ({
  user: state.user,
}));

type PropsFromRedux = ConnectedProps<typeof connector>

interface IAccountSettingProps {
  username: string;
  realname?: string;
  slogan?: string;
  school?: string;
}

const AccountSetting: React.FC<IAccountSettingProps & PropsFromRedux> = (props) => {
  const { user } = props;
  const [userAuth, setUserAuth] = useState<Partial<UserAuthDto>>({});
  const {
    id, username,
  } = user ?? {};
  async function callback() {
    const respData = await new UserAuthApi().get<UserAuthDto>();
    setUserAuth(respData.data);
  }

  useEffect(() => {
    callback();
  }, []);
  return (
    <Card title="账号信息" plain>
      <ProfileField userId={id!} title="ID" field="username" value={username!} />
      <ProfileField
        userId={id!}
        type="account"
        title="邮箱"
        field="identifier"
        value={userAuth.identifier!}
        onSuccess={callback}
      />
      <ProfileField
        userId={id!}
        type="account"
        title="修改秘密"
        field="credential"
        value="******"
        onSuccess={callback}
      />
    </Card>
  );
};

export default connector(AccountSetting);
