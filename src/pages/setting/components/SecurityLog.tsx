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
import React, { useEffect, useState } from 'react';
import { List, Avatar, message } from 'antd';
import { Card } from '../../../components/Card';
import avatarImg from '../../../assets/images/user.png';
import AuthLogApi from '../../../network/AuthLogApi';
import styles from './security-log.module.scss';
import { AuthLogDto } from '../../../domain';

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

const SecurityLog = (props: ISecurityLogProps) => {
  const [logs, setLogs] = useState<AuthLogDto[]>([]);
  useEffect(() => {
    async function callback() {
      try {
        const respData = await new AuthLogApi().get<AuthLogDto[]>();
        setLogs(respData.data);
      } catch (err) {
        message.error(err);
      }
    }
    callback();
  }, []);
  return (
    <Card title="安全日志" plain>
      <List
        dataSource={logs}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.logUser.avatar} />}
              title={item.title}
              description={`${item.content} | ${item.loginIp} | ${item.createdAt}`}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default SecurityLog;
