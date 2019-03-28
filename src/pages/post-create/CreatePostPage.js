import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import PostService from '../../services/PostService';
import CreatePostPageStyles from './CreatePostPageStyle';
import PostForm from '../../components/post-form';

const CreatePostPage = (props) => {
  const { classes, history } = props;
  const createPost = async ({ title, content, categories }) => {
    const post = await PostService.createPost(title, content, categories);

    history.push(`/post/${post.id}`);
  };
  const getMoreCategories = query => PostService.fetchCategories(query);

  return (
    <PostForm
      className={classes.form}
      post={null}
      getMoreCategories={getMoreCategories}
      onSave={createPost}
    />
  );
};

CreatePostPage.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(withStyles(CreatePostPageStyles)(CreatePostPage));
