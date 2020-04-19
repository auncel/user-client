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
import { ProblemDifficulty } from '../../enum';
import { DifficultyTag } from '../../components/DifficultyTag';

export default [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    width: 80,
    render(id: number) {
      return <Link to={`/problems/${id}`}>{String(id).padStart(3, '0')}</Link>;
    },
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render(title: string, record: any) {
      return <Link to={`/problems/${record.id}`}>{title}</Link>;
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render(title: string): string {
      return title;
    },
  },
  {
    title: 'Acceptance',
    dataIndex: 'acceptance',
    key: 'acceptance',
    width: 120,
    render(acceptance: number): string {
      return `${acceptance}%`;
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
];
