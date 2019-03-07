import gql from 'graphql-tag';
import BackendGraphQLConnector from '../../services/BackendGraphQLConnector';
import PostFragment from '../../fragments/postFragment';

// eslint-disable-next-line import/prefer-default-export
export const getPosts = async () => {
  const { getAllPosts: posts } = await BackendGraphQLConnector.query({
    query: gql`
      query GetAllPosts{
        getAllPosts {
          ...PostFragment
        }
      }
      ${PostFragment}
    `,
  });

  return posts;
};

export const searchPosts = () => Promise.resolve(([]));
