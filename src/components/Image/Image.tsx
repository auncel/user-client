/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 7th April 2020 10:11 pm                            *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 7th April 2020 10:11 pm                           *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import styles from './image.module.scss';

export interface IImageProps {
  src: string;
  alt?: string;
  width?: number;
}

export const Image: React.FC<IImageProps> = (props) => {
  const { src, alt, width } = props;
  return (
    <div style={{ width: width ?? 'auto' }}>
      <img className={styles.acCompImage} src={src} alt={alt ?? 'src'} />
    </div>
  );
};
