import gql from 'graphql-tag';
import UserFragment from './userFragment';

export default gql`
  fragment CommentFragment on Comment {
    id
    content
    creationDate
    rate
    author {
      ...UserFragment
    }
    ratedUsers {
      user {
        id
      }
      action
    }
  }
  ${UserFragment}
`;
