/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Friday, 17th April 2020 9:37 am                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Friday, 17th April 2020 9:37 am                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { Table } from 'antd';
import columns from './columns';
import styles from './styles.module.scss';
import { ProblemDifficulty } from '../../enum';

interface IContestProps {
  contestId?: number;
}

const mockData = Array(29).fill({
  id: 1,
  title: '盒子模型',
  status: 'pedding',
  type: 'public',
  startTime: new Date().toLocaleDateString(),
  endTime: new Date().toLocaleDateString(),
  acceptance: 90,
  maker: 'yidafu',
  difficulty: ProblemDifficulty.Easy,
});

export const Contest: React.FC<IContestProps> = (props) => {
  const { contestId = 1 } = props;

  return (
    <div className={styles.problemCard}>
      <Table
        columns={columns}
        dataSource={mockData}
        pagination={{
          position: 'bottomLeft',
          defaultPageSize: 20,
        }}
      />
    </div>
  );
};

export default Contest;
