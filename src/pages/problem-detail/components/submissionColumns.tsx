/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 29th April 2020 10:21 am                         *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 29th April 2020 10:21 am                        *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import dayjs from 'dayjs';
import {
  SubmissionDto, UserDto, SubmissionStatus as SubmissionStatusEnum,
} from '../../../domain';
import { SubmissionStatus } from '../../../components';

export default [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    render(id: number): string {
      return String(id).padStart(3, '0');
    },
  },
  {
    title: 'Submiter',
    dataIndex: 'submiter',
    key: 'submiter',
    render(submiter: UserDto, record: SubmissionDto) {
      return record.submiter.username;
    },
  },
  {
    title: 'Exe Time',
    dataIndex: 'exeTime',
    key: 'exeTime',
    render(exeTime: number) {
      return exeTime > 0 ? `${exeTime} ms` : 'N/A';
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render(status: SubmissionStatusEnum) {
      return <SubmissionStatus status={status} />;
    },
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render(createdAt: string, record: SubmissionDto): string {
      return dayjs(createdAt).format('YYYY-MM-DD hh:mm:ss');
    },
  },
] as ColumnsType<SubmissionDto>;
