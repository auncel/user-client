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
  Button, Row, Tabs, message, Tag,
} from 'antd';
import ReactMarkdown from 'react-markdown';
import { connect, ConnectedProps } from 'react-redux';
import { Editor, getValue } from './components/Eidotr';
import styles from './styles.module.scss';
import ProblemApi from '../../network/ProblemApi';
import { ProblemDto, TagDto } from '../../domain';
import JudgeApi from '../../network/JudgeApi';
import { RootState } from '../../store';
import ProblemSubmission from './components/ProblemSubmission';
import { IReponseResult } from '../../network/ResponseResult';

interface IProblemDetailProps {
  problemId?: number;
}

const problemApi = new ProblemApi();
const judgeApi = new JudgeApi();

function getId(): number {
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

const connector = connect((state: RootState) => ({
  user: state.user,
}));

type PropsWithRedux = ConnectedProps<typeof connector>;

export const ProblemDetail: React.FC<IProblemDetailProps & PropsWithRedux> = (props) => {
  const { user } = props;
  const [problem, setProblem] = useState<Partial<ProblemDto>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const problemId = getId();
  useEffect(() => {
    async function fetchProblemDetail(): Promise<void> {
      try {
        const respData = await problemApi.getById({
          params: { id: problemId },
        });
        setProblem(respData.data);
      } catch (err) {
        message.error(err.toString());
      }
    }
    fetchProblemDetail();
  }, [problemId]);

  const markdonwText = `# ${problem.title}

${problem.description}`;

  const handleSubmit = useCallback(async () => {
    if (user.id) {
      const html = getValue(HTML_KEY);
      const style = getValue(CSS_KEY);
      try {
        setLoading(true);
        const respData = await judgeApi.submit({
          problemId, userId: user.id, html, style,
        });
        message.success(respData.msg ?? `得分：${respData.data.score}`);
      } catch (err) {
        message.error(err.toString());
      } finally {
        setLoading(false);
      }
    } else {
      message.warn('请先登录！');
    }
  }, [user]);

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
              <Button type="primary" onClick={handleSubmit} loading={loading}>提交</Button>
            </Row>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="提交" key="submission">
          <ProblemSubmission problemId={problemId} userId={user?.id!} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default connector(ProblemDetail);
