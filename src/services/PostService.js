import gql from 'graphql-tag';
import PostFragment, { PostPreviewFragment } from '../fragments/postFragment';
import CommentFragment from '../fragments/commnetFragment';
import BackendGraphQLConnector from './BackendGraphQLConnector';

export default class PostService {
  static async getPosts(page = 0) {
    const { getAllPosts: posts } = await BackendGraphQLConnector.query({
      query: gql`
        query GetAllPosts {
          getAllPosts {
            ...PostPreviewFragment
          }
        }
        ${PostPreviewFragment}
      `,
    });

    return posts;
  }

  static async getPost(postId) {
    const { getPost: post } = await BackendGraphQLConnector.query({
      variables: { postId: parseInt(postId, 10) },
      query: gql`
        query GetPost($postId: Float!) {
          getPost(postId: $postId) {
            ...PostFragment
          }
        }
        ${PostFragment}
      `,
    });

    return post;
  }

  static async createPost(title, content, categories) {
    const post = { title, content, categories };

    const { createPost: createdPost } = await BackendGraphQLConnector.mutate({
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

    return createdPost;
  }

  static async updatePost(post) {
    const { updatePost } = await BackendGraphQLConnector.mutate({
      variables: { post },
      mutation: gql`
        mutation UpdatePost($post: PostInput!) {
          updatePost(post: $post) {
            ...PostFragment
          }
        }
        ${PostFragment}
      `,
    });

    return updatePost;
  }

  static async deletePost(postId) {
    const { deletePost } = await BackendGraphQLConnector.mutate({
      variables: { postId },
      mutation: gql`
        mutation DeletePost($postId: Float!) {
          deletePost(postId: $postId)
        }
      `,
    });

    return deletePost;
  }

  static async addComment(postId, comment) {
    const { addComment } = await BackendGraphQLConnector.mutate({
      variables: { postId, comment },
      mutation: gql`
        mutation AddComment($postId: Float!, $comment: CommentInput!) {
          addComment(postId: $postId, comment: $comment) {
            ...CommentFragment
          }
        }
        ${CommentFragment}
      `,
    });

    return addComment;
  }

  static async updateComment(comment) {
    const { updateComment } = await BackendGraphQLConnector.mutate({
      variables: { comment },
      mutation: gql`
        mutation UpdateComment($comment: CommentInput!) {
          updateComment(comment: $comment)
        }
      `,
    });

    return updateComment;
  }

  static async deleteComment(commentId) {
    const { updateComment } = await BackendGraphQLConnector.mutate({
      variables: { commentId },
      mutation: gql`
        mutation DeleteComment($commentId: Float!) {
          deleteComment(commentId: $commentId)
        }
      `,
    });

    return updateComment;
  }

  static searchPosts(searchQuery, page = 0) {

  }
}
