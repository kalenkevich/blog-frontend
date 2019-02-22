import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const styles = {
  postPageContainer: {
    width: '100%',
    height: '100%',
    border: '1px solid',
  },
};

const PostPage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.postPageContainer}>
        Post Page
    </div>
  );
};

PostPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostPage);
