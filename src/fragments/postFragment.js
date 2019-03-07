import gql from 'graphql-tag';
import UserFragment from './userFragment';
import CategoryFragment from './categoryFragment';
import CommentFragment from './commnetFragment';

export default gql`
  fragment PostFragment on Post {
    id
    title
    content
    author {
      ...UserFragment
    }
    rate
    categories {
      ...CategoryFragment
    }
    comments {
      ...CommentFragment
    }
    creationDate
  }
  ${UserFragment}
  ${CategoryFragment}
  ${CommentFragment}
`;

export const PostPreviewFragment = gql`
  fragment PostPreviewFragment on PostPreview {
    id
    title
    contentPreview
    author {
      ...UserFragment
    }
    rate
    categories {
      ...CategoryFragment
    }
    commentsCount
    creationDate
  }
  ${UserFragment}
  ${CategoryFragment}
`;
