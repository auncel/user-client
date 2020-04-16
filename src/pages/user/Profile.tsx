/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 15th April 2020 4:46 pm                          *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 15th April 2020 4:46 pm                         *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React, { ReactNode } from 'react';
import { Row, Col } from 'antd';
import dayjs from 'dayjs';
import ProfileCard from './components/ProfileCard';
import { Card } from '../../components/Card';
import styles from './style.module.scss';
import AcceptanceRateCard from './components/AcceptanceRateCard';
import SubmissionCard from './components/SubmissionCard';
import ContestCard from './components/ContestCard';
import SubmissionList from './components/SubmissionList';

interface IProfileProps {
  username?: string;
  children?: ReactNode;
}

const mockARData = [
  {
    type: 'accepted',
    value: 80,
  },
  {
    type: 'worrng',
    value: 20,
  },
];

const mockContest = [
  {
    title: '竞赛标题',
    startTime: '2020-04-16T07:56:03.296Z',
    score: 80,
  },
  {
    title: '竞赛标题',
    startTime: '2020-04-16T07:56:03.296Z',
    score: 80,
  },
  {
    title: '竞赛标题',
    startTime: '2020-04-16T07:56:03.296Z',
    score: 80,
  },
];

const mockSubmision = [
  {
    title: '问题标题',
    startTime: '2020-04-16T07:56:03.296Z',
    status: 0,
  },
  {
    title: '问题标题',
    startTime: '2020-04-16T07:56:03.296Z',
    status: 4,
  },
  {
    title: '问题标题',
    startTime: '2020-04-16T07:56:03.296Z',
    status: 0,
  },
];

export const Profile: React.FC = (props: IProfileProps) => {
  console.log();
  return (
    <Row style={{ marginTop: '30px' }}>
      <Col span={8}>
        <ProfileCard username="Yidafu" realname="Dov Yih" slogan="long long text" />
        <AcceptanceRateCard data={mockARData} />
      </Col>
      <Col span={16}>
        <SubmissionCard />
        <ContestCard data={mockContest} />
        <SubmissionList data={mockSubmision} />
      </Col>
    </Row>
  );
};

export default Profile;
