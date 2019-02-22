import React from 'react';
import { Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

export const PostPage = loadable(
  () => import(/* webpackChunkName: "PostPage" */ './pages/post'),
);
export const PostsPage = loadable(
  () => import(/* webpackChunkName: "MainPage" */ './pages/main'),
);
export const SingInPage = loadable(
  () => import(/* webpackChunkName: "SingInPage" */ './pages/sign-in'),
);
export const SingUpPage = loadable(
  () => import(/* webpackChunkName: "SingUpPage" */ './pages/sign-up'),
);
export const UserProfilePage = loadable(
  () => import(/* webpackChunkName: "UserProfilePage" */ './pages/user-profile'),
);

export default [{
  component: PostPage,
  path: '/post/:postId',
  exact: true,
}, {
  component: PostsPage,
  path: '/posts',
  exact: true,
}, {
  component: SingInPage,
  path: '/sign-in',
  exact: true,
}, {
  component: SingUpPage,
  path: '/sign-up',
  exact: true,
}, {
  component: UserProfilePage,
  path: '/user/:userId',
  exact: true,
}, {
  path: '/',
  render: () => <Redirect to='/posts'/>,
}];
