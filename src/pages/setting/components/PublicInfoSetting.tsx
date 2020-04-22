/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 16th April 2020 8:18 pm                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 16th April 2020 8:18 pm                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Card } from '../../../components/Card';
import ProfileField from './ProfileField';
import styles from './public-info-setting.module.scss';
import { RootState } from '../../../store';

const connector = connect((state: RootState) => ({
  user: state.user,
}));

type PropsFromRedux = ConnectedProps<typeof connector>


interface IPublicInfoSettingProps {
  username: string;
  realname?: string;
  slogan?: string;
  school?: string;
}

const PublicInfoSetting: React.FC<IPublicInfoSettingProps & PropsFromRedux> = (props) => {
  const { user } = props;
  const {
    id, realname, slogan, school,
  } = user ?? {};
  return (
    <Card title="个人信息" plain className={styles.publicInfoSetting}>
      <ProfileField userId={id!} title="姓名" field="realname" value={realname!} />
      <ProfileField userId={id!} title="签名" field="slogan" value={slogan!} />
      <ProfileField userId={id!} title="学校" field="school" value={school!} />
    </Card>
  );
};

export default connector(PublicInfoSetting);
