/* -------------------------------------------------------------------------*
* Description: Generated using typescript-generator from auncel-web-domain  *
*                                                                           *
* File Created: Monday, 20th April 2020 6:05 pm                             *
* Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
*                                                                           *
* Last Modified: Monday, 20th April 2020 6:05 pm                            *
* Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
*                                                                           *
* Copyright 2019 - 2020 Mozilla Public License 2.0                          *
*-------------------------------------------------------------------------- */

/**
 * @see https://ncjamieson.com/dont-export-const-enums/
 * @see https://github.com/microsoft/fluentui/issues/7110
 * @see https://github.com/facebook/create-react-app/issues/5681
 * @see https://github.com/wmonk/create-react-app-typescript/issues/400
 * @see https://github.com/microsoft/TypeScript/issues/11202
 * @see https://github.com/microsoft/TypeScript/issues/10879#issuecomment-248077719
 * @see https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats
 */

/* eslint-disable */

// Generated using typescript-generator version 2.9.456 on 2020-05-26 14:01:37.

export interface User extends BaseEntity {
  username: string;
  realname: string;
  avatar: string;
  slogan: string;
  role: UserRoleType;
  status: string;
  registerIp: string;
  school: string;
  authLogs: AuthLog[];
  problems: Problem[];
  submissions: Submission[];
  userAuths: UserAuth[];
  notifications: Notification[];
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
  status: UserContestStatus;
  duration: number;
  updatedAt: Date;
  createdAt: Date;
}

export interface Problem extends BaseEntity {
  title: string;
  description: string;
  html: string;
  style: string;
  renderTree: string;
  stars: number;
  difficulty: ProblemDifficulty;
  acceptance: number;
  submission: number;
  access: ProblemAccessType;
  tags: Tag[];
  submissions: Submission[];
}

export interface Contest extends BaseEntity {
  title: string;
  clarification: string;
  startTime: Date;
  endTime: Date;
  timeLimit: number;
  status: ContestStatus;
  access: ContestAccessType;
  invitaionCode: string;
  userContests: UserContest[];
  contestProblems: ContestProblem[];
}

export interface ContestProblem {
  problem: Problem;
  score: number;
  updatedAt: Date;
  createdAt: Date;
}

export interface Notification extends BaseEntity {
  title: string;
  content: string;
  level: NotificationLevel;
}

export interface Submission extends BaseEntity {
  html: string;
  style: string;
  status: SubmissionStatus;
  score: number;
  renderTree: string;
  logs: string;
  screenshot: string;
  exeTime: number;
  submiter: User;
}

export interface Tag extends BaseEntity {
  value: string;
}

export interface UserDto extends Serializable {
  id: number;
  username: string;
  realname: string;
  avatar: string;
  status: string;
  role: UserRoleType;
  registerIp: string;
  slogan: string;
  school: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SubmissionDto extends Serializable {
  id: number;
  html: string;
  style: string;
  status: SubmissionStatus;
  score: number;
  logs: string;
  screenshot: string;
  renderTree: string;
  exeTime: number;
  problem: ProblemDto;
  submiter: UserDto;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserContestDto extends Serializable {
  userId: number;
  contestId: number;
  totalScore: number;
  status: UserContestStatus;
  duration: number;
  contest: ContestDto;
}

export interface UserRequestDto extends Serializable {
  id: number;
  username: string;
  realname: string;
  avatar: string;
  status: string;
  role: UserRoleType;
  registerIp: string;
  slogan: string;
  school: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContestDto extends Serializable {
  id: number;
  title: string;
  clarification: string;
  startTime: Date;
  endTime: Date;
  timeLimit: number;
  status: ContestStatus;
  access: ContestAccessType;
  invitaionCode: string;
  maker: UserDto;
  problems: ProblemDto[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProblemDto extends Serializable {
  id: number;
  title: string;
  description: string;
  html: string;
  style: string;
  renderTree: string;
  stars: number;
  status: ProblemStatusType;
  difficulty: ProblemDifficulty;
  acceptance: number;
  submission: number;
  access: ProblemAccessType;
  maker: UserDto;
  tags: TagDto[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthLogDto extends Serializable {
  id: number;
  loginIp: string;
  logUser: UserDto;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserAuthDto extends Serializable {
  id: number;
  identityType: string;
  identifier: string;
  credential: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseEntity extends Serializable {
  id: number;
  updatedAt: Date;
  createdAt: Date;
}

export interface Serializable {
}

export interface TagDto {
  id: number;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRoleType {
  ORDINARY = "ORDINARY",
  ADMIN = "ADMIN",
  SUPER_USER = "SUPER_USER",
}

export enum UserContestStatus {
  UNANSWERED = "UNANSWERED",
  ANSWERED = "ANSWERED",
}

export enum ProblemDifficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export enum ProblemAccessType {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  INTERNAL = "INTERNAL",
}

export enum ContestStatus {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  ENDED = "ENDED",
}

export enum ContestAccessType {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  INTERNAL = "INTERNAL",
}

export enum NotificationLevel {
  ANNOUNCEMENT = "ANNOUNCEMENT",
  NOTICE = "NOTICE",
}

export enum SubmissionStatus {
  ACCEPT = "ACCEPT",
  PADDING = "PADDING",
  PADDING_TIMEOUT = "PADDING_TIMEOUT",
  JUDGING = "JUDGING",
  WRONG_ANWSER = "WRONG_ANWSER",
  RENDER_ERROR = "RENDER_ERROR",
  SYNTAX_ERROR = "SYNTAX_ERROR",
}

export enum ProblemStatusType {
  NONE = "NONE",
  WORKING_ON = "WORKING_ON",
  WRONG_ANSWER = "WRONG_ANSWER",
  ACCEPTED = "ACCEPTED",
}
