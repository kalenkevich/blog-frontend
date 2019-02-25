import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const styles = {};

const CreatePostPage = () => (
  <div>Create Post Page</div>
);

CreatePostPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(CreatePostPage);
