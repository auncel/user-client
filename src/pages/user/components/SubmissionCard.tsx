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
import { Card } from '../../../components/Card';
import styles from './submission-card.module.scss';

const SubmissionCard = () => {
  useEffect(() => {
    const cal: CalHeatMap.CalHeatMap = new CalHeatMap();
    const today = dayjs();
    const lastYear = today.subtract(1, 'year');

    const mockData = Array(100)
      .fill(1)
      .reduce((preV): any => {
        (preV as any)[+(today.subtract(Math.random() * 364 | 0, 'day').toDate()) / 1000 | 0] = 2;
        return preV;
      }, {} as any);
    cal.init({
      itemSelector: '#cal-heatmap',
      domain: 'year',
      subDomain: 'day',
      minDate: lastYear.toDate(),
      maxDate: today.toDate(),
      displayLegend: true,
      range: 1,
      rowLimit: 7,
      data: mockData,
    });
  }, []);
  return (
    <Card title="近一年的提交情况">
      <div className={styles.acSubmissionMap} id="cal-heatmap" />
    </Card>
  );
};

export default SubmissionCard;
