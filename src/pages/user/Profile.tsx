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
import React, { ReactNode, useEffect, useState } from 'react';
import { Row, Col, message } from 'antd';
import ProfileCard from './components/ProfileCard';
import AcceptanceRateCard from './components/AcceptanceRateCard';
import SubmissionCard from './components/SubmissionCard';
import ContestCard from './components/ContestCard';
import SubmissionList from './components/SubmissionList';
import { authentication } from '../../components/Authentication';
import { IAuthProps } from '../../components/Authentication/authentication';
import ContestApi from '../../network/ContestApi';
import { UserContestDto } from '../../domain';

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

const contestApi = new ContestApi();

export const ProfileComp: React.FC<IProfileProps & IAuthProps> = (props) => {
  const { user } = props;
  const [contests, setContests] = useState<UserContestDto[]>([]);

  useEffect(() => {
    contestApi.getByUser({ params: { userId: user.id! } })
      .then((respData) => {
        setContests(respData.data);
      }).catch((err) => {
        message.error(err);
      });
  }, []);
  return (
    <Row style={{ marginTop: '30px' }}>
      <Col span={8}>
        <ProfileCard
          username={user.username!}
          realname={user.realname}
          slogan={user.slogan}
        />
        <AcceptanceRateCard data={mockARData} />
      </Col>
      <Col span={16}>
        <SubmissionCard />
        <ContestCard data={contests} />
        <SubmissionList data={mockSubmision} />
      </Col>
    </Row>
  );
};

export const Profile = authentication(ProfileComp);
