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
import { Card } from '../../../components/Card';
import ProfileField from './ProfileField';
import styles from './public-info-setting.module.scss';

interface IPublicInfoSettingProps {
  username: string;
  realname?: string;
  slogan?: string;
  school?: string;
}

const PublicInfoSetting = (props: IPublicInfoSettingProps) => {
  const {
    username, realname, slogan, school,
  } = props;
  return (
    <Card title="个人信息" plain className={styles.publicInfoSetting}>
      <ProfileField title="姓名" field="username" value="易大富" />
      <ProfileField title="签名" field="slogan" value="这是一段签名。" />
      <ProfileField title="学校" field="school" value="HDU" />
    </Card>
  );
};

export default PublicInfoSetting;
