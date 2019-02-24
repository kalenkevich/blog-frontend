import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
import { signIn } from './SignInPageService';
import SignInPageStyle from './SignInPageStyle';

const SignInPage = (props) => {
  const { classes, history } = props;
  const forEmailInput = getForInput({ placeholder: 'Email' });
  const forPasswordInput = getForInput({ placeholder: 'Password', type: 'password' });

  return (
    <div className={classes.page}>
      <div className={classes.form}>
        <div className={classes.formField}>Sign In Title</div>
        <Input className={classes.formField} {...forEmailInput}/>
        <Input className={classes.formField} {...forPasswordInput}/>
        <div className={classes.formField}>
          <Button onClick={() => signIn(forEmailInput.value, forPasswordInput.value)}
            className={classes.actionButton}
          >
            Sign In
          </Button>
          <Button onClick={() => history.push('/sign-up')}
            className={classes.actionButton}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export const getForInput = (props) => {
  const [value, setValue] = useState('');

  return {
    ...props,
    value,
    onChange: event => setValue(event.target.value),
  };
};

SignInPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default withRouter(withStyles(SignInPageStyle)(SignInPage));
