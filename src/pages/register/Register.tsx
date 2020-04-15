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
import {
  KeyOutlined, MailOutlined, UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Image } from '../../components';
import logo from '../../assets/images/vertical-logo.png';
import githubIcon from '../../assets/images/github.png';

export const Register: React.FC = () => {
  const onSubmit = (data: object): void => {
    console.log(data);
  };

  return (
    <div className={styles.acRegisterBox}>
      <Row justify="center">
        <Image src={logo} width={100} />
      </Row>

      <Form className={styles.acRegisterGroup}>

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
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            prefix={<KeyOutlined />}
            type="password"
            placeholder="请确认密码"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>

      <Row justify="end">
        {/* <Link to="/forget-password" className={styles.acRegisterText}>忘记秘密</Link> */}
        <Link to="/register" className={styles.acRegisterText}>注册</Link>
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

export default Register;
