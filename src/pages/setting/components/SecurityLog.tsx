/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 16th April 2020 9:01 pm                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 16th April 2020 9:01 pm                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { List, Avatar } from 'antd';
import { Card } from '../../../components/Card';
import avatarImg from '../../../assets/images/user.png';
import styles from './security-log.module.scss';

interface ISecurityLogProps {
  username?: string;
}

const mockLogs = [
  {
    user: {
      avatar: avatarImg,
    },
    title: 'Log Title',
    content: 'long long long long log content',
  },
  {
    user: {
      avatar: avatarImg,
    },
    title: 'Log Title',
    content: 'long long long long log content',
  },
  {
    user: {
      avatar: avatarImg,
    },
    title: 'Log Title',
    content: 'long long long long log content',
  },
];

const SecurityLog = (props: ISecurityLogProps) => (
  <Card title="安全日志" plain>
    <List
      dataSource={mockLogs}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.user.avatar} />}
            title={item.title}
            description={item.content}
          />
        </List.Item>
      )}
    />
  </Card>
);

export default SecurityLog;
