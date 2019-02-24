import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import Post from '../../components/post';
import { getPost } from './PostPageService';

export const styles = {
  postPageContainer: {
    width: '100%',
    height: '100%',
  },
};

const PostPage = (props) => {
  const { classes } = props;
  const id = '';
  const forPost = getForPost(id);

  return (
    <div className={classes.postPageContainer}>
      <Post
        {...forPost}
      />
    </div>
  );
};

export const getForPost = (id) => {
  const [post, setPost] = useState({ user: {} });
  const [isLoading, setLoadingState] = useState(false);
  const fetchPost = async (postId) => {
    setLoadingState(true);

    const fetchedPost = await getPost(postId);

    setPost(fetchedPost);
    setLoadingState(false);
  };

  useEffect(() => {
    fetchPost(id);
  }, []);

  return {
    post,
    isLoading,
  };
};

PostPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(PostPage));
