import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import PostListItemComponentLoading from '../post-list-item/PostListItemComponentLoading';

export const styles = {};

const PostListLoading = ({ classes }) => (
  <div className={classes.root}>
    <PostListItemComponentLoading/>
    <PostListItemComponentLoading/>
    <PostListItemComponentLoading/>
  </div>
);

PostListLoading.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PostListLoading);
