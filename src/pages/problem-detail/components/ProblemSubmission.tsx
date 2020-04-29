/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 28th April 2020 10:09 pm                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 28th April 2020 10:09 pm                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Table, message } from 'antd';
import { AxiosRequestConfig } from 'axios';
import { RootState } from '../../../store';
import submissionColumns from './submissionColumns';
import SubmissionApi from '../../../network/SubmissionApi';
import { SubmissionDto } from '../../../domain';

interface IProblemSubmissionProps {
  userId: number;
  problemId: number;
}

const connector = connect(
  (state: RootState) => ({}),
  {},
);

type PropsWithRedux = ConnectedProps<typeof connector>;

const submissionApi = new SubmissionApi();

const ProblemSubmission: React.FC<IProblemSubmissionProps & PropsWithRedux> = (props) => {
  const { userId, problemId } = props;
  const [subission, setSubmission] = useState<SubmissionDto[]>();

  console.log(props);

  useEffect(() => {
    async function fetchSubmission() {
      try {
        const respData = await submissionApi.get<SubmissionDto[]>(
          { params: { userId, problemId } } as AxiosRequestConfig,
        );
        setSubmission(respData.data);
      } catch (err) {
        message.error(err.toString());
      }
    }

    fetchSubmission();
  }, [userId, problemId]);

  return (
    <div style={{ width: '800px', margin: 'auto' }}>
      <Table
        columns={submissionColumns}
        dataSource={subission}
        pagination={{
          defaultPageSize: 20,
        }}
      />

    </div>
  );
};

export default connector(ProblemSubmission);
