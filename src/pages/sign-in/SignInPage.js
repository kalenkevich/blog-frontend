import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
import Label from '../../components/common/label';
import SignInPageStyle from './SignInPageStyle';
import withAuthorization from '../../hocs/withAuthorization';

const SignInPage = (props) => {
  const { classes, history, signIn } = props;
  const forErrorLabel = getForErrorLabel();
  const forEmailInput = getForInput({ placeholder: 'Email' });
  const forPasswordInput = getForInput({ placeholder: 'Password', type: 'password' });
  const trySignIn = async () => {
    const [, error] = await signIn(forEmailInput.value, forPasswordInput.value);

    if (error) {
      forErrorLabel.setSignUpError(error.message);
    }
  };

  return (
    <div className={classes.page}>
      <div className={classes.form}>
        <div className={classes.formField}>Sign In</div>
        <Label className={classes.formLabel} {...forErrorLabel}/>
        <Input className={classes.formField} {...forEmailInput}/>
        <Input className={classes.formField} {...forPasswordInput}/>
        <div className={classes.formField}>
          <Button onClick={trySignIn}
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

export const getForErrorLabel = () => {
  const [signUpError, setSignUpError] = useState(null);

  return {
    type: 'error',
    value: signUpError,
    setSignUpError,
  };
};

SignInPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  signIn: PropTypes.func,
};

export default withAuthorization(withRouter(withStyles(SignInPageStyle)(SignInPage)));
