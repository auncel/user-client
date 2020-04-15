/* --------------------------------------------------------------------------*
 * Filename: d:\Project\fe-oj\packages\client-web\src\routes\index.js        *
 * Path: d:\Project\fe-oj\packages\client-web                                *
 * Created Date: Sunday, December 15th 2019, 9:55:39 pm                      *
 * Author: yidafu(dov-yih)                                                   *
 *                                                                           *
 * Copyright (c) 2019 None                                                   *
 *-------------------------------------------------------------------------- */
import { lazy } from 'react';

const Login = lazy(() => import('./login/Login'));
const Register = lazy(() => import('./register/Register'));
const Profile = lazy(() => import('./user/Profile'));

export default [
  {
    title: '登录',
    path: '/login',
    components: Login,
    layout: 'base',
  },
  {
    title: '注册',
    path: '/register',
    components: Register,
    layout: 'base',
  },
  {
    title: '个人信息',
    path: '/u/:username',
    components: Profile,
    layout: 'base',
  },
];
