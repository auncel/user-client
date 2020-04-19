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
import React, { useRef, useEffect } from 'react';
import { Button, Row } from 'antd';
import { Card } from '../../components/Card';
import { Editor } from './components/Eidotr';
import styles from './styles.module.scss';

interface IProblemDetailProps {
  problemId?: number;
}

const mockDescription = `问题描述占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位
符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符

占位符占位符占位符占位符占位符占位符占位符占位符占位符

占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符

占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符`;

const aHtml = `
<div class="parent">
  <div class="child"></div>
</div>
`;

const aCss = `
.parent {
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
}

.child {
  width: 200px;
  height: 200px;
  background-color: green;
}
`;
export const ProblemDetail: React.FC<IProblemDetailProps> = (props) => {
  const { problemId } = props;

  return (
    <div className={styles.problemDetail}>
      <Card title="问题描述" plain>
        {mockDescription}
      </Card>

      <div className={styles.problemDetailEditors}>
        <Editor lang="html" value={aHtml} />
        <Editor lang="css" value={aCss} />
      </div>
      <Row justify="end">
        <Button style={{ margin: '15px 35px' }} type="primary">提交</Button>
      </Row>
    </div>
  );
};

export default ProblemDetail;
