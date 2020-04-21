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
import { Link } from 'react-router-dom';
import { Card } from '../../../components/Card';
import styles from './contest-card.module.scss';
import Time from '../../../components/Time/index';
import { UserContest, UserContestDto } from '../../../domain';
import { ContestStatus } from '../../../components/ContestStatus';

export interface IContestItem {
  title: string;
  startTime: string;
  score: number;
}

interface IContestCardProps {
  data: UserContestDto[];
}

const ContestCard = (props: IContestCardProps) => {
  const { data } = props;
  console.log(data);
  return (
    <Card title="最近竞赛" className={styles.contestCard}>
      <List
        bordered
        dataSource={data}
        renderItem={(item): JSX.Element => (
          <List.Item
            key={item.contest.id}
            extra={(
              <div>
                <ContestStatus status={item.contest.status} />
                {item.totalScore < 50 ? <StarOutlined /> : <StarFilled />}
              </div>
            )}
          >
            <div>
              <span className={styles.listItemHeader}>
                <Link to={`/contests/${item.contest.id}`}>{item.contest.title}</Link>
              </span>
              <Time date={item.contest.startTime.toString()} />
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ContestCard;
