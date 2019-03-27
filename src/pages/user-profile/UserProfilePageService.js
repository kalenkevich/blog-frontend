/* eslint-disable max-len */
import gql from 'graphql-tag';
import BackendGraphQLConnector from '../../services/BackendGraphQLConnector';
import { PostPreviewFragment } from '../../fragments/postFragment';
import UserFragment from '../../fragments/userFragment';

export default class UserProfilePageService {
  static async getUserAndPosts(userId) {
    const { getUser: user, getUserPosts: posts } = await BackendGraphQLConnector.query({
      variables: { userId: parseInt(userId, 10) },
      query: gql`
        query GetUserAndPosts($userId: Float!) {
          getUser(userId: $userId) {
            ...UserFragment
          }
          getUserPosts(userId: $userId) {
            ...PostPreviewFragment
          }
        }
        ${UserFragment}
        ${PostPreviewFragment}
      `,
    });

    return { user, posts };
  }
}
