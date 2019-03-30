import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import Post from '../../components/post';
import PostService from '../../services/PostService';
import PostPageStyle from './PostPageStyle';
import withAuthorization from '../../hocs/withAuthorization';

const PostPage = (props) => {
  const {
    classes,
    match,
    history,
    authorizedUser,
  } = props;
  const { postId } = match.params;
  const forPost = getForPost(postId, history, authorizedUser);

  return (
    <div className={classes.postPageContainer}>
      <Post {...forPost}/>
    </div>
  );
};

export const getForPost = (id, history, authorizedUser) => {
  const [post, setPost] = useState(null);
  const [isLoading, setLoadingState] = useState(false);

  const fetchPost = async (postId) => {
    setLoadingState(true);

    const fetchedPost = await PostService.getPost(postId);

    setPost(fetchedPost);
    setLoadingState(false);
  };

  const updatePost = async ({ content, title, categories }) => {
    setLoadingState(true);

    const updatedPost = await PostService.updatePost({
      id: post.id,
      title,
      content,
      categories,
    });

    setPost(updatedPost);
    setLoadingState(false);
  };

  const deletePost = async () => {
    setLoadingState(true);

    await PostService.deletePost(post.id);

    setLoadingState(false);

    history.push('/');
  };

  const addComment = async (comment) => {
    setLoadingState(true);

    const updatedPost = await PostService.addComment(post.id, comment);

    setPost(updatedPost);
    setLoadingState(false);
  };

  const updateComment = async (comment) => {
    await PostService.updateComment(comment);

    const updatedComments = (post.comments || []).map(c => {
      if (c.id === comment.id) {
        return {
          ...c,
          content: comment.content,
        };
      }

      return c;
    });

    setPost({
      ...post,
      comments: updatedComments,
    });
  };

  const deleteComment = async (comment) => {
    await PostService.deleteComment(comment.id);
    const updatedComments = (post.comments || []).filter(c => c.id !== comment.id);

    setPost({
      ...post,
      comments: updatedComments,
    });
  };

  const ratePost = async (rateAction) => {
    const action = rateAction === 'UP';
    const updatedPost = await PostService.ratePost(post.id, action);

    setPost(updatedPost);
  };

  const rateComment = async (comment, rateAction) => {
    const action = rateAction === 'UP';
    const updatedComment = await PostService.rateComment(comment.id, action);
    const updatedPostComments = (post.comments || []).map((c) => {
      if (c.id === comment.id) {
        return {
          ...c,
          rate: updatedComment.rate,
          ratedUsers: updatedComment.ratedUsers,
        };
      }

      return c;
    });

    setPost({
      ...post,
      comments: updatedPostComments,
    });
  };

  const getMoreCategories = query => PostService.fetchCategories(query);

  useEffect(() => {
    fetchPost(id);
  }, []);

  return {
    post,
    isLoading,
    getMoreCategories,
    onUpdate: updatePost,
    onDelete: deletePost,
    onRate: ratePost,
    onCommentRate: rateComment,
    onAddComment: addComment,
    onUpdateComment: updateComment,
    onDeleteComment: deleteComment,
  };
};

PostPage.propTypes = {
  classes: PropTypes.object.isRequired,
  authorizedUser: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
};

export default withAuthorization(withRouter(withStyles(PostPageStyle)(PostPage)));
