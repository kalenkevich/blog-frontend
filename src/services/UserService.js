import gql from 'graphql-tag';
import { UserFragment, makeBackendGraphQLConnector } from '@zenvo/core-ui';
import Settings from '../../config/settings';

const backendGraphQLConnector = makeBackendGraphQLConnector(`${Settings.AuthBackendUrl}/graphql`);

export default class UserProfilePageService {
  static async getUser(userId) {
    const { getUser: user } = await backendGraphQLConnector.query({
      variables: { userId: parseInt(userId, 10) },
      query: gql`
        query GetUserAndPosts($userId: Float!) {
          getUser(userId: $userId) {
            ...UserFragment
          }
        }
        ${UserFragment}
      `,
    });

    return user;
  }
}
