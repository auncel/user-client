/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Monday, 30th March 2020 8:48 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Monday, 30th March 2020 8:48 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import React, { useCallback } from 'react';
import {
  Row, Form, Input, Button, message,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import md5 from 'md5';
import { ConnectedProps, connect, useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { Image } from '../../components';
import logo from '../../assets/images/vertical-logo.png';
import githubIcon from '../../assets/images/github.png';
import UserApi, { IUserParams } from '../../network/UserApi';
import { RootState } from '../../store';
import { iniUser } from '../../store/user/actions';
import { User } from '../../domain';

const mapState = (state: RootState) => ({
  user: state.user,
});

const mapDispatch = {
  iniUserDispatch: iniUser,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

const LoginComp: React.FC<PropsFromRedux & RouteComponentProps> = (props) => {
  const { iniUserDispatch, history } = props;

  const handleFinish = useCallback(async (valus) => {
    valus.password = md5(`${valus.password}salt`);
    try {
      const respData = await new UserApi().login<User>(valus as IUserParams);
      iniUserDispatch(respData.data);
      history.push(`/u/${respData.data.username}`);
    } catch (err) {
      console.error(err);
      message.error(err.message);
    }
  }, []);

  return (
    <div className={styles.acLoginBox}>
      <Row justify="center">
        <Image src={logo} width={100} />
      </Row>

      <Form className={styles.acLoginGroup} onFinish={handleFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: '请输入邮箱' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="请输入邮箱"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            登录
          </Button>
        </Form.Item>
      </Form>

      <Row justify="end">
        {/* <Link to="/forget-password" className={styles.acLoginText}>忘记秘密</Link> */}
        <Link to="/register" className={styles.acLoginText}>注册</Link>
      </Row>

      <div className={styles.acLoginGroup}>
        <Row justify="center" className={styles.acLoginText}>第三方登录</Row>
        <Row justify="center">
          <Image src={githubIcon} width={30} />
        </Row>
      </div>
    </div>
  );
};

export const Login = withRouter(connector(LoginComp));
