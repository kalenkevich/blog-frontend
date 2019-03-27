import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import Post from '../../components/post';
import PostService from '../../services/PostService';
import PostPageStyle from './PostPageStyle';

const PostPage = (props) => {
  const { classes, match } = props;
  const { postId } = match.params;
  const forPost = getForPost(postId);

  return (
    <div className={classes.postPageContainer}>
      <Post {...forPost}/>
    </div>
  );
};

export const getForPost = (id) => {
  const [post, setPost] = useState(null);
  const [isLoading, setLoadingState] = useState(false);
  const fetchPost = async (postId) => {
    setLoadingState(true);

    const fetchedPost = await PostService.getPost(postId);

    setPost(fetchedPost);
    setLoadingState(false);
  };
  const addComment = async (comment) => {
    setLoadingState(true);

    const updatedPost = await PostService.addComment(post.id, comment);

    setPost(updatedPost);
    setLoadingState(false);
  };

  const updateComment = async (comment) => {
    setLoadingState(true);

    const updatedPost = await PostService.updateComment(comment);

    setPost(updatedPost);
    setLoadingState(false);
  };

  const deleteComment = async (commentId) => {
    setLoadingState(true);

    const updatedPost = await PostService.deleteComment(commentId);

    setPost(updatedPost);
    setLoadingState(false);
  };

  const ratePost = async (rateAction) => {
    await PostService.ratePost(post.id, rateAction);

    setPost({
      ...post,
      rate: post.rate + (rateAction === 'UP' ? 1 : -1),
    });
  };

  useEffect(() => {
    fetchPost(id);
  }, []);

  return {
    post,
    isLoading,
    onRate: ratePost,
    onAddComment: addComment,
    onUpdateComment: updateComment,
    onDeleteComment: deleteComment,
  };
};

PostPage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object,
};

export default withRouter(withStyles(PostPageStyle)(PostPage));
