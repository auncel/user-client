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
import { UserContestDto, SubmissionDto } from '../../domain';
import SubmissionApi from '../../network/SubmissionApi';

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


const contestApi = new ContestApi();
const submissionAPi = new SubmissionApi();

export const ProfileComp: React.FC<IProfileProps & IAuthProps> = (props) => {
  const { user } = props;
  const [contests, setContests] = useState<UserContestDto[]>([]);
  const [submisison, setSubmisison] = useState<SubmissionDto[]>([]);

  useEffect(() => {
    contestApi.getByUser({ params: { userId: user.id! } })
      .then((respData) => {
        setContests(respData.data);
      }).catch((err) => {
        message.error(err);
      });
    submissionAPi.getByUser({ params: { userId: user.id! } })
      .then((respData) => {
        setSubmisison(respData.data);
      }).catch((err) => {
        message.error(err);
      });
  }, []);
  return (
    <Row style={{ marginTop: '30px' }}>
      <Col span={8}>
        <ProfileCard
          avatar={user.avatar}
          username={user.username!}
          realname={user.realname}
          slogan={user.slogan}
        />
        <AcceptanceRateCard data={mockARData} />
      </Col>
      <Col span={16}>
        <SubmissionCard userId={user.id!} />
        <ContestCard data={contests} />
        <SubmissionList data={submisison} />
      </Col>
    </Row>
  );
};

export const Profile = authentication(ProfileComp);
