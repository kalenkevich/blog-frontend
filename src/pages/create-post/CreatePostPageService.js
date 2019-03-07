import gql from 'graphql-tag';
import BackendGraphQLConnector from '../../services/BackendGraphQLConnector';
import PostFragment from '../../fragments/postFragment';

// eslint-disable-next-line import/prefer-default-export
export const createPost = (title, content, categories) => {
  const post = { title, content, categories };

  return BackendGraphQLConnector.mutate({
    variables: { post },
    mutation: gql`
      mutation CreatePost($post: PostInput!) {
        createPost(post: $post) {
          ...PostFragment
        }
      }
      ${PostFragment}
    `,
  });
};
