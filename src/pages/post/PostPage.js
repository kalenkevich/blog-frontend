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
      <Post
        {...forPost}
      />
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
  match: PropTypes.object,
};

export default withRouter(withStyles(PostPageStyle)(PostPage));
