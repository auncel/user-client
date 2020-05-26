/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Friday, 3rd April 2020 10:17 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Friday, 3rd April 2020 10:17 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, connect, ConnectedProps } from 'react-redux';
import { Popover, message } from 'antd';
import styles from './header.module.scss';
import { Image } from '../Image';
import haderConfig from '../../config/header';
import horizontalLogo from '../../assets/images/horizontal-logo.png';
import bellImg from '../../assets/images/bell.png';
import userImg from '../../assets/images/user.png';
import { RootState } from '../../store';
import { initUser } from '../../store/user/actions';
import UserApi from '../../network/UserApi';
import { UserDto } from '../../domain';

const connector = connect((state: RootState) => ({
  user: state.user,
}), {
  initUser,
});
type PropsFromRedux = ConnectedProps<typeof connector>

const userApi = new UserApi();


const HeaderComp: React.FC<PropsFromRedux> = (props) => {
  // const user = useSelector();
  const { user, initUser } = props;

  useEffect(() => {
    if (!user.id) {
      userApi.get<UserDto>().then((resp) => {
        initUser(resp.data);
      }).catch((err) => message.error(err.toString()));
    }
  });

  function renderRight() {
    if (user.username) {
      const profileContent = (
        <ul className={styles.headerHover}>
          <li>
            <Link to={`/u/${user.username}`}>
              {user.username}
            </Link>
          </li>
          <li>
            <Link to="/setting">
              Setting
            </Link>
          </li>
        </ul>
      );
      return (
        <Popover content={(
          profileContent
      )}
        >
          <Link to="/u/yidafu">
            <Image src={user.avatar || userImg} alt="头像" width={30} />
          </Link>
        </Popover>
      );
    }
    return (
      <div>
        <Link to="/login">Login</Link>
        {' | '}
        <Link to="/register">Register</Link>
      </div>
    );
  }

  return (
    <nav className={styles.acHeader}>
      <div className={styles.acHeaderContainer}>
        <div className={styles.acHeaderLeft}>
          <Image width={120} src={horizontalLogo} alt="图标" />
          <ul>
            {haderConfig.map((config) => (
              <li key={config.url}><Link to={config.url}>{config.title}</Link></li>
            ))}
            <li />
          </ul>
        </div>

        <div className={styles.acHeaderRight}>
          {renderRight()}
        </div>
      </div>
    </nav>
  );
};

export const Header = connector(HeaderComp);
