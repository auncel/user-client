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

import React from 'react';
import {
  Row, Form, Input, Button,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Image } from '../../components';
import logo from '../../assets/images/vertical-logo.png';
import githubIcon from '../../assets/images/github.png';

export const Login: React.FC = () => {
  const onSubmit = (data: object): void => {
    console.log(data);
  };

  return (
    <div className={styles.acLoginBox}>
      <Row justify="center">
        <Image src={logo} width={100} />
      </Row>

      <Form className={styles.acLoginGroup}>
        <Form.Item
          name="username"
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
            注册
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

export default Login;
