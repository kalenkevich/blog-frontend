/* eslint-disable max-len */
import gql from 'graphql-tag';
import { UserFragment } from '@zenvo/core-ui';
import BackendGraphQLConnector from '../../services/BackendGraphQLConnector';
import UserService from '../../services/UserService';
import { PostPreviewFragment } from '../../fragments/postFragment';

export default class UserProfilePageService {
  static async getUserAndPosts(userId) {
    const { getUserPosts: posts } = await BackendGraphQLConnector.query({
      variables: { userId: parseInt(userId, 10) },
      query: gql`
        query GetUserPosts($userId: Float!) {
          getUserPosts(userId: $userId) {
            ...PostPreviewFragment
          }
        }
        ${UserFragment}
        ${PostPreviewFragment}
      `,
    });
    const user = await UserService.getUser(userId);

    return { user, posts };
  }
}
