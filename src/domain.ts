/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Monday, 20th April 2020 6:05 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Monday, 20th April 2020 6:05 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
/* eslint-disable @typescript-eslint/interface-name-prefix */

// Generated using typescript-generator version 2.9.456 on 2020-04-20 18:11:45.

export interface User extends BaseEntity {
  username: string;
  realname: string;
  avatar: string;
  slogan: string;
  role: number;
  status: string;
  registerTime: Date;
  registerIp: string;
  school: string;
  authLogs: AuthLog[];
  problems: Problem[];
  userAuths: UserAuth[];
  userContests: UserContest[];
}

export interface UserAuth extends BaseEntity {
  identityType: string;
  identifier: string;
  verifiled: string;
}

export interface AuthLog extends BaseEntity {
  loginIp: string;
  title: string;
  content: string;
}

export interface UserContest {
  totalScore: number;
  status: string;
  duration: number;
  submitTime: Date;
}

export interface Problem extends BaseEntity {
  title: string;
  description: string;
  renderTree: string;
  stars: number;
  difficulty: ProblemDifficulty;
  acceptance: number;
  submission: number;
  access: ProblemAccessType;
  tags: Tag[];
  submissions: Submission[];
  qhtml: string;
  qcss: string;
}

export interface Contest extends BaseEntity {
  title: string;
  clarification: string;
  startTiem: Date;
  endTime: Date;
  timeLimit: number;
  status: string;
  access: ContestAccessType;
  invitaionCode: string;
  userContests: UserContest[];
  contestProblems: ContestProblem[];
}

export interface ContestProblem {
  problem: Problem;
  score: number;
}

export interface Notification extends BaseEntity {
  title: string;
  content: string;
  level: NotificationLevel;
}

export interface Submission extends BaseEntity {
  status: string;
  score: number;
  logs: string;
  screenshot: string;
  ahtml: string;
  acss: SubmissionStatus;
}

export interface Tag extends BaseEntity {
  value: string;
}

export interface BaseEntity {
  id: number;
  updatedAt: Date;
  createdAt: Date;
}

export enum ProblemDifficulty {
  Easy,
  Medium,
  Hard,
}

export enum ProblemAccessType {
  PUBLIC,
  PRIVATE,
  INTERNAL,
}

export enum ContestAccessType {
  PUBLIC,
  PRIVATE,
  INTERNAL,
}

export enum NotificationLevel {
  ANNOUNCEMENT,
  NOTICE,
}

export enum SubmissionStatus {
  ACCEPT,
  PADDING,
  PADDING_TIMEOUT,
  JUDGING,
  WRONG_ANWSER,
  RENDER_ERROR,
  SYNTAX_ERROR,
}
