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
import { Link } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table';
import { ProblemDifficulty } from '../../../../enum';
import { ProblemDto, ProblemStatusType } from '../../../../domain';
import { DifficultyTag } from '../../../../components/DifficultyTag';
import { ProblemStatus } from '../../../../components/ProblemStatus';
import styles from './styles.module.scss';


interface IProblemProps {
  problems?: ProblemDto[];
  isEnd: boolean;
}

export const ProblemList: React.FC<IProblemProps> = (props) => {
  const { problems, isEnd } = props;
  // const [problmes, setProblems] = useState<ProblemDto[]>([]);

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 80,
      render(id: number): string {
        return String(id).padStart(3, '0');
      },
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render(title: string, record: ProblemDto) {
        return isEnd ? title : <Link to={`/problems/${record.id}`}>{title}</Link>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render(status: ProblemStatusType) {
        return <ProblemStatus status={status} />;
      },
    },
    {
      title: 'Acceptance',
      // dataIndex: 'acceptance',
      key: 'acceptance',
      width: 120,
      render(acceptance: number, record: ProblemDto): string {
        return `${record.acceptance / Math.max(record.submission, 1)}%`;
      },
    },

    {
      title: 'Difficulty',
      dataIndex: 'diffculty',
      key: 'diffculty',
      width: 120,
      render(diffculty: ProblemDifficulty): JSX.Element {
        return <DifficultyTag type={diffculty} />;
      },
    },
  ] as ColumnsType<ProblemDto>;

  return (
    <div className={styles.problemCard}>
      <Table
        columns={columns}
        dataSource={problems}
        pagination={{
          position: 'bottomLeft',
          defaultPageSize: 20,
          style: {
            margin: '15px 30px',
          },
        }}
      />
    </div>
  );
};

export default ProblemList;
