import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link, withRouter } from 'react-router-dom';
import Button from '../common/button';
import withAuthorization from '../../hocs/withAuthorization';
import HeaderComponentStyle from './HeaderComponentStyle';

const HeaderComponent = (props) => {
  const {
    classes,
    history,
    authorizedUser,
    signOut,
  } = props;
  const currentLocation = history.location.pathname;
  const canShowSignUpPanel = !['/sign-in', '/sign-up'].includes(currentLocation);

  let ResultPanel = null;
  if (authorizedUser) {
    ResultPanel = (
      <div className={classes.actionPanel}>
        <Button className={classes.actionPanelButton}>
          Hello {authorizedUser.name}
        </Button>
        <Button className={classes.actionPanelButton}
          onClick={() => history.push('/post/create')}
        >
          Create new Post
        </Button>
        <Button className={classes.actionPanelButton} onClick={signOut}>
          Sign Out
        </Button>
      </div>
    );
  } else if (canShowSignUpPanel) {
    ResultPanel = (
      <div className={classes.actionPanel}>
        <Button className={classes.actionPanelButton}
          onClick={() => history.push('/sign-in')}
        >
          Sign In
        </Button>
        <Button className={classes.actionPanelButton}
          onClick={() => history.push('/sign-up')}
        >
          Sign Up
        </Button>
      </div>
    );
  }

  return (
    <div className={classes.headerContainer}>
      <Link className={classes.brandTitle} to='/'>Header</Link>
      {ResultPanel}
    </div>
  );
};

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  authorizedUser: PropTypes.object,
  signOut: PropTypes.func,
};

export default withAuthorization(withRouter(withStyles(HeaderComponentStyle)(HeaderComponent)));
