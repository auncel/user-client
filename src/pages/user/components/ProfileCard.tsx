/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 15th April 2020 5:31 pm                          *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 15th April 2020 5:31 pm                         *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { Image } from '../../../components';
import userImg from '../../../assets/images/user.png';
import styles from './profile-card.module.scss';

interface IProfileCardProps {
  username: string;
  avatar?: string;
  realname?: string;
  slogan?: string;
}

const ProfileCard = (props: IProfileCardProps) => {
  console.log();
  const {
    username, avatar, realname, slogan,
  } = props;
  return (
    <div className={styles.acProfileCard}>
      <Image src={avatar ?? userImg} width={300} alt="用户头像" />

      <h3 className={styles.acProfileCardH3}>{username}</h3>
      {realname && <h4 className={styles.acProfileCardH4}>{realname}</h4>}
      {slogan && <p className={styles.acProfileCardText}>{slogan}</p>}
    </div>
  );
};

export default ProfileCard;
