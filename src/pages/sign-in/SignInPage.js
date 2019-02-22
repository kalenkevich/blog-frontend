import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const styles = {
  signInPageContainer: {
    width: '100%',
    height: '100%',
    border: '1px solid',
  },
};

const SignInPage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.signInPageContainer}>
        Sign In Page
    </div>
  );
};

SignInPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignInPage);
