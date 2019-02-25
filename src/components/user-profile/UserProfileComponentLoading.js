import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const styles = () => ({

});

const UserProfileComponentLoading = () => (
  <div></div>
);

UserProfileComponentLoading.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(UserProfileComponentLoading);
