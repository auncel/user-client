/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Sunday, 19th April 2020 1:58 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Sunday, 19th April 2020 1:58 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React, {
  useEffect, useState, useCallback,
} from 'react';
import {
  Tabs, message,
} from 'antd';
import ReactMarkdown from 'react-markdown';
import { connect, ConnectedProps } from 'react-redux';
import styles from './styles.module.scss';
import { ContestDto, ContestStatus } from '../../domain';
import { RootState } from '../../store';
import ContestApi from '../../network/ContestApi';
import { ProblemList } from './components/ProblemList';

interface IContestDetailProps {
  problemId?: number;
}

const contestApi = new ContestApi();

function getId(): number {
  const url = new URL(window.location.href);
  const index = url.pathname.lastIndexOf('/', url.pathname.length - 2);
  const idStr = url.pathname.substring(index + 1);
  return parseInt(idStr, 10);
}

const connector = connect((state: RootState) => ({
  user: state.user,
}));

type PropsWithRedux = ConnectedProps<typeof connector>;

export const ContestDetail: React.FC<IContestDetailProps & PropsWithRedux> = (props) => {
  const { user } = props;
  const [contest, setContest] = useState<Partial<ContestDto>>({});
  const contestId = getId();
  useEffect(() => {
    async function fetchContestDetail(): Promise<void> {
      try {
        const respData = await contestApi.getById({
          params: { id: contestId },
        });
        setContest(respData.data);
      } catch (err) {
        message.error(err.toString());
      }
    }
    fetchContestDetail();
  }, [contestId]);

  const markdonwText = `# ${contest.title}

${contest.clarification}`;

  return (
    <div className={styles.contestDetail}>
      <Tabs defaultActiveKey="clarification">
        <Tabs.TabPane tab="竞赛声明" key="clarification">
          <div
            style={{ padding: '25px' }}
          >
            <ReactMarkdown
              source={markdonwText}
            />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="问题列表" key="problem">
          <ProblemList problems={contest.problems} isEnd={contest.status === ContestStatus.ENDED} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default connector(ContestDetail);
