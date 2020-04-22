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
import {
  KeyOutlined, MailOutlined, UserOutlined,
} from '@ant-design/icons';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import md5 from 'md5';
import styles from './styles.module.scss';
import { Image } from '../../components';
import logo from '../../assets/images/vertical-logo.png';
import { initUser } from '../../store/user/actions';
import githubIcon from '../../assets/images/github.png';
import UserApi from '../../network/UserApi';
import { User } from '../../domain';

const connector = connect(null, {
  iniUserDispatch: initUser,
});

type PropsFromRedux = ConnectedProps<typeof connector>


export const RegisterComp: React.FC<PropsFromRedux & RouteComponentProps> = (props) => {
  const { iniUserDispatch, history } = props;

  const handleFinish = useCallback(async (values) => {
    values.password = md5(`${values.password}salt`);
    delete values.passwordCheck;
    try {
      const respData = await new UserApi().register<User>(values);
      iniUserDispatch(respData.data);
      history.push(`/u/${respData.data.username}`);
    } catch (err) {
      console.error(err);
      message.error(err.message);
    }
  }, []);

  return (
    <div className={styles.acRegisterBox}>
      <Row justify="center">
        <Image src={logo} width={100} />
      </Row>

      <Form
        className={styles.acRegisterGroup}
        onFinish={handleFinish}
      >

        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="请输入用户名"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: '请输入邮箱' }]}
        >
          <Input
            prefix={<MailOutlined />}
            type="email"
            placeholder="请确认邮箱"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            prefix={<KeyOutlined />}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>

        <Form.Item
          name="passwordCheck"
          dependencies={['password']}
          rules={[
            { required: true, message: '请输入密码' },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject('密码不一致');
              },
            })]}
        >
          <Input
            prefix={<KeyOutlined />}
            type="password"
            placeholder="请确认密码"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            注册
          </Button>
        </Form.Item>
      </Form>

      <Row justify="end">
        {/* <Link to="/forget-password" className={styles.acRegisterText}>忘记秘密</Link> */}
        <Link to="/login" className={styles.acRegisterText}>登录</Link>
      </Row>

      <div className={styles.acRegisterGroup}>
        <Row justify="center" className={styles.acRegisterText}>第三方登录</Row>
        <Row justify="center">
          <Image src={githubIcon} width={30} />
        </Row>
      </div>
    </div>
  );
};


export const Register = withRouter(connector(RegisterComp));
