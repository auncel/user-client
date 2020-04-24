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
  useRef, useEffect, useState, useCallback,
} from 'react';
import {
  Button, Row, Tabs, message, Tag,
} from 'antd';
import ReactMarkdown from 'react-markdown';
import { Card } from '../../components/Card';
import { Editor, getValue } from './components/Eidotr';
import styles from './styles.module.scss';
import ProblemApi from '../../network/ProblemApi';
import { ProblemDto, TagDto } from '../../domain';
import SubmissionApi from '../../network/SubmissionApi';

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
  height:; 200px;
  background-color: green;
}
`;

const problemApi = new ProblemApi();

function getId() {
  const url = new URL(window.location.href);
  const index = url.pathname.lastIndexOf('/', url.pathname.length - 2);
  const idStr = url.pathname.substring(index + 1);
  return parseInt(idStr, 10);
}

const HTML_KEY = 'html-editor';
const CSS_KEY = 'css-editor';

const tagColors = [
  'magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green',
  'cyan', 'blue', 'geekblue', 'purple',
];
function getColor(text: string): string {
  const hexString = text.split('')
    .map((c) => c.charCodeAt(0).toString(16))
    .join('');
  let sum = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const hex of hexString) {
    sum += parseInt(hex, 16);
  }
  return tagColors[sum % tagColors.length];
}

export const ProblemDetail: React.FC<IProblemDetailProps> = (props) => {
  // const { problemId } = props;
  const [problem, setProblem] = useState<Partial<ProblemDto>>({});
  const problemId = getId();
  useEffect(() => {
    async function fetchProblemDetail() {
      try {
        const respData = await problemApi.get<ProblemDto>({ params: { id: problemId } });
        setProblem(respData.data);
      } catch (err) {
        message.error(err.toSting());
      }
    }
    fetchProblemDetail();
  }, [problemId]);

  const markdonwText = `# ${problem.title}

${problem.description}`;

  const handleSubmit = useCallback(() => {
    const aHtml = getValue(HTML_KEY);
    const qHtml = getValue(CSS_KEY);
    new SubmissionApi().post({ problemId, aHtml, qHtml }).catch(console.error);
  }, []);

  return (
    <div className={styles.problemDetail}>
      <Tabs defaultActiveKey="description">
        <Tabs.TabPane tab="问题描述" key="description">
          <div
            style={{ padding: '25px' }}
          >
            <ReactMarkdown
              source={markdonwText}
            />
            {(problem.tags ?? []).map((tag: TagDto) => (
              <Tag key={tag.value + tag.id} color={getColor(tag.value)}>{tag.value}</Tag>
            ))}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="编码" key="coding">
          <div className={styles.problemDetailContainer}>
            <div className={styles.problemDetailEditors}>
              <Editor uKey={HTML_KEY} lang="html" value="<!-- HTML Code Here -->" />
              <Editor uKey={CSS_KEY} lang="css" value="/* CSS Code Here */" />
            </div>
            <Row justify="end" className={styles.problemDetailSubmit}>
              <Button type="primary" onClick={handleSubmit}>提交</Button>
            </Row>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default ProblemDetail;
