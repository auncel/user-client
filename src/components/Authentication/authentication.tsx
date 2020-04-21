/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 21st April 2020 11:43 am                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 21st April 2020 11:44 am                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Spin, message } from 'antd';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { IUserState } from '../../store/user/types';
import UserApi from '../../network/UserApi';

export interface IAuthProps {
  user: IUserState;
}

export interface IAuthState {
  loading?: boolean;
  isLogin?: boolean;
  user: IUserState;
}

export const authentication = (Comp: React.ComponentType<any>) => {
  console.log('auth');
  class Authentication extends React.Component<any, IAuthState> {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      loading: true,
      isLogin: false,
      user: {},
    }

    async componentDidMount() {
      // eslint-disable-next-line react/destructuring-assignment
      const userId = this.props.user.id || window.sessionStorage.getItem('isLogin');
      const isLogin = !!userId;
      try {
        const resp = await new UserApi()
          .get<IUserState>({ params: { id: userId } });
        this.setState({
          loading: false,
          isLogin,
          user: resp.data,
        });
      } catch (err) {
        // message.error(err);
        this.setState({
          loading: false,
          isLogin: false,
        });
      }
    }

    render() {
      console.log('render', this.state);

      const { loading, isLogin, user } = this.state;
      if (loading) {
        return <Spin size="large" style={{ margin: '150px auto', display: 'block' }} />;
      }
      if (isLogin) {
        return <Comp user={user} />;
      }
      return <Redirect to="/login" />;
    }
  }

  return connect(
    (state: RootState) => ({ user: state.user }),
  )(Authentication);
};
