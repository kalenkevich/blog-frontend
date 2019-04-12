import gql from 'graphql-tag';
import { UserFragment } from '@zenvo/core-ui';

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
      userId
      action
    }
  }
  ${UserFragment}
`;
