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
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table';
import { ProblemDifficulty } from '../../enum';
import { DifficultyTag } from '../../components/DifficultyTag';
import {
  UserDto, ContestStatus as ContestStatusEnum, ContestAccessType, ContestDto,
} from '../../domain';
import { ContestStatus } from '../../components/ContestStatus';
import { ContestAccess } from '../../components/ContestAccess';

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
    render(title: string, record: ContestDto) {
      return <Link to={`/contests/${record.id}`}>{title}</Link>;
    },
  },
  {
    title: 'Start Timg',
    dataIndex: 'startTime',
    key: 'startTime',
    render(startTime: string): string {
      return dayjs(startTime).format('YYYY-MM-DD hh:mm');
    },
  },
  {
    title: 'End Time',
    dataIndex: 'endTime',
    key: 'endTime',
    render(endTime: string): string {
      return dayjs(endTime).format('YYYY-MM-DD hh:mm');
    },
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render(status: ContestStatusEnum) {
      return <ContestStatus status={status} />;
    },
  },
  {
    title: 'Type',
    dataIndex: 'access',
    key: 'access',
    align: 'center',
    render(access: ContestAccessType) {
      return <ContestAccess access={access} />;
    },
  },
  {
    title: 'Holder',
    dataIndex: 'maker',
    key: 'maker',
    render(maker: UserDto): string {
      return maker.username + (maker.realname ? `(${maker.realname})` : '');
    },
  },
] as ColumnsType<ContestDto>;
