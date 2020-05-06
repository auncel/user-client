/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 15th April 2020 8:12 pm                          *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 15th April 2020 8:12 pm                         *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
// eslint-disable-next-line
/// <reference path="./cal-heatmap.d.ts" />

import React, { useEffect } from 'react';
import CalHeatMap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';
import dayjs from 'dayjs';
import { message } from 'antd';
import { Card } from '../../../components/Card';
import styles from './submission-card.module.scss';
import SubmissionApi from '../../../network/SubmissionApi';

export interface ISubmissionCardProps {
  userId: number;
}

const submissionApi = new SubmissionApi();

const SubmissionCard: React.FC<ISubmissionCardProps> = (props) => {
  const { userId } = props;
  useEffect(() => {
    const cal: CalHeatMap.CalHeatMap = new CalHeatMap();
    // https://github.com/wa0x6e/cal-heatmap/issues/209
    // https://github.com/wa0x6e/cal-heatmap/blob/2b9015369471a80303a779b6e8f2521102ca218c/index.html#L3873-L3882
    cal.init({
      itemSelector: '#cal-heatmap',
      domain: 'year',
      subDomain: 'day',
      start: new Date(new Date().getFullYear(), 0, 1),
      displayLegend: true,
      range: 1,
      rowLimit: 7,
    });
    submissionApi.getHeatMap({ params: { userId } })
      .then((respData) => {
        cal.update(respData.data);
      })
      .catch((err) => {
        message.error(err.toString());
      });
  }, []);
  return (
    <Card title="近一年的提交情况">
      <div className={styles.acSubmissionMap} id="cal-heatmap" />
    </Card>
  );
};

export default SubmissionCard;
