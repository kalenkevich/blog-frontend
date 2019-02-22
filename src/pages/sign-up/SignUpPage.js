import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const styles = {
  signUpPageContainer: {
    width: '100%',
    height: '100%',
    border: '1px solid',
  },
};

const SignUpPage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.signUpPageContainer}>
        Sign Up Page
    </div>
  );
};

SignUpPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUpPage);
