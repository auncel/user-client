/* --------------------------------------------------------------------------*
 * Filename: d:\Project\fe-oj\packages\client-web\src\routes\index.js        *
 * Path: d:\Project\fe-oj\packages\client-web                                *
 * Created Date: Sunday, December 15th 2019, 9:55:39 pm                      *
 * Author: yidafu(dov-yih)                                                   *
 *                                                                           *
 * Copyright (c) 2019 None                                                   *
 *-------------------------------------------------------------------------- */
import { Login } from './login';
import { Register } from './register';
import { Profile } from './user';
import { Setting } from './setting';
import { ProblemDetail } from './problem-detail';
import { Contest } from './contest';
import { Problem } from './problem';

// const Login = lazy(() => import('./login/Login'));
// const Register = lazy(() => import('./register/Register'));
// const Profile = lazy(() => import('./user/Profile'));
// const Setting = lazy(() => import('./setting/Setting'));
// const Problem = lazy(() => import('./problem/Problem'));
// const Contest = lazy(() => import('./contest/Contest'));
// const ProblemDetail = lazy(() => import('./problem-detail/ProblemDetail'));

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
  {
    title: '设置',
    path: '/setting',
    components: Setting,
    layout: 'base',
  },
  {
    title: '问题',
    path: '/problems/:id',
    components: ProblemDetail,
    layout: 'paved',
  },
  {
    title: '问题',
    path: '/problems',
    components: Problem,
    layout: 'base',
  },
  {
    title: '竞赛',
    path: '/contests',
    components: Contest,
    layout: 'base',
  },
];
