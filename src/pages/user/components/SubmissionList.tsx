/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 15th April 2020 10:43 pm                         *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 15th April 2020 10:43 pm                        *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { List } from 'antd';
import { Card } from '../../../components/Card';
import { SubmissionStatus } from '../../../components/SubmisionStatus';
import styles from './submission-list.module.scss';
import Time from '../../../components/Time';
import { SubmissionStatus as SubmissionStatusEnum } from '../../../enum';

export interface ISubmissionItem {
  title: string;
  startTime: string;
  status: SubmissionStatusEnum;
}

interface ISubmissionListProps {
   data: ISubmissionItem[];
}

const SubmissionList = (props: ISubmissionListProps) => {
  const { data } = props;
  return (
    <Card title="最近提交" className={styles.submissionList}>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            extra={<SubmissionStatus status={item.status} />}
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

export default SubmissionList;
