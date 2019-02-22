import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const styles = {
  userProfilePageContainer: {
    width: '100%',
    height: '100%',
    border: '1px solid',
  },
};

const UserProfilePage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.userProfilePageContainer}>
        User Profile Page
    </div>
  );
};

UserProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserProfilePage);
