/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 15th April 2020 7:36 pm                          *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 15th April 2020 7:36 pm                         *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React, { useEffect, useRef } from 'react';
import { Donut } from '@antv/g2plot';
import { Card } from '../../../components/Card';
import styles from './acceptance-rate-card.module.scss';


interface IAcceptanceRateProps {
  data: {type: string; value: number}[];
}

const AcceptanceRateCard = (props: IAcceptanceRateProps) => {
  const { data } = props;
  const ringRef = useRef(null);
  useEffect(() => {
    const ringPlot = new Donut(ringRef.current!, {
      width: 300,
      height: 300,
      data,
      legend: {
        visible: false,
      },
      radius: 0.8,
      statistic: {
        visible: false,
        totalLabel: '',
        triggerOff: 'mouseleave',
        triggerOn: 'mouseenter',
      },
      color: ['green', 'red'],
      angleField: 'value',
      colorField: 'type',
    });
    ringPlot.render();
  }, [data]);
  return (

    <Card title="通过率" className={styles.acAccetanceRateCard}>
      <div className={styles.acAccetanceRateCardRing} ref={ringRef} />
    </Card>
  );
};

export default AcceptanceRateCard;
