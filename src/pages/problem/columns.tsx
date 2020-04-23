/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Friday, 17th April 2020 9:39 am                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Friday, 17th April 2020 9:39 am                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { Link } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table';
import { ProblemDifficulty } from '../../enum';
import { DifficultyTag } from '../../components/DifficultyTag';
import { ProblemDto, ProblemStatusType } from '../../domain';
import { ProblemStatus } from '../../components/ProblemStatus';

export default [
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
      return <Link to={`/problems/${record.id}`}>{title}</Link>;
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


// select id, created_at, updated_at, a_css, a_html, logs, problem_id, score, screenshot, status, submiter_id from submission  where problem_id=? limit ?
