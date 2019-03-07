import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import PostLinkItemComponentStyle from './PostListItemComponentStyle';

export const styles = (theme) => {
  const postLinkItemComponentStyles = PostLinkItemComponentStyle(theme);

  return ({
    root: {
      margin: '5px 0',
      height: '200px',
      ...postLinkItemComponentStyles.root,
      ...theme.loading,
    },
  });
};

const PostListItemLoading = ({ classes }) => (
  <div className={classes.root}/>
);

PostListItemLoading.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PostListItemLoading);
