/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 15th April 2020 10:00 pm                         *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 15th April 2020 10:00 pm                        *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { List } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { Card } from '../../../components/Card';
import styles from './contest-card.module.scss';
import Time from '../../../components/Time/index';

export interface IContestItem {
  title: string;
  startTime: string;
  score: number;
}

interface IContestCardProps {
  data: IContestItem[];
}

const ContestCard = (props: IContestCardProps) => {
  const { data } = props;
  return (
    <Card title="最近竞赛" className={styles.contestCard}>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            extra={item.score < 50 ? <StarOutlined /> : <StarFilled />}
          >
            <div>
              <span className={styles.listItemHeader}>{item.title}</span>
              <Time date={item.startTime} />
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ContestCard;
