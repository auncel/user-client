/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 23rd April 2020 10:26 pm                          *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 23rd April 2020 10:26 pm                         *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import {
  QuestionCircleTwoTone, CheckCircleTwoTone, SmileTwoTone, CloseCircleTwoTone,
} from '@ant-design/icons';
import { ProblemStatusType } from '../../domain';

interface IProblemStatusProps {
  status: ProblemStatusType;
}

const ProblemStatus: React.FC<IProblemStatusProps> = (props) => {
  const { status } = props;
  switch (status) {
    case ProblemStatusType.ACCEPTED: {
      return <CheckCircleTwoTone twoToneColor="#52c41a" />;
    }
    case ProblemStatusType.WORKING_ON: {
      return <QuestionCircleTwoTone />;
    }
    case ProblemStatusType.WRONG_ANSWER: {
      return <CloseCircleTwoTone twoToneColor="#eb2f96" />;
    }
    case ProblemStatusType.NONE:
    default:
      return <SmileTwoTone twoToneColor="#fff" />;
  }
};

export default ProblemStatus;
