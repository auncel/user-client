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
import { ProblemDifficulty } from '../../enum';
import { DifficultyTag } from '../../components/DifficultyTag';

export default [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    render(id: number): string {
      return String(id).padStart(5, '0');
    },
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render(title: string): string {
      return title;
    },
  },
  {
    title: 'start Timg',
    dataIndex: 'startTime',
    key: 'startTime',
    render(startTime: string): string {
      return startTime;
    },
  },
  {
    title: 'End Time',
    dataIndex: 'endTime',
    key: 'endTime',
    width: 100,
    render(endTime: string): string {
      return endTime;
    },
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render(status: string): string {
      return status;
    },
  },

  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render(type: string): string {
      return type;
    },
  },

  {
    title: 'Holder',
    dataIndex: 'maker',
    key: 'maker',
    render(maker: string): string {
      return maker;
    },
  },
];
