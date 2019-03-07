import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import PostListItemComponentLoading from '../post-list-item/PostListItemComponentLoading';

export const styles = {
  root: {},
};

const PostListLoading = ({ classes }) => (
  <div className={classes.root}>
    <PostListItemComponentLoading/>
    <PostListItemComponentLoading/>
    <PostListItemComponentLoading/>
    <PostListItemComponentLoading/>
    <PostListItemComponentLoading/>
  </div>
);

PostListLoading.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PostListLoading);
