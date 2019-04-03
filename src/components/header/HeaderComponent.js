import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../common/button';
import HeaderComponentStyle from './HeaderComponentStyle';
import MobileContext from '../../context/MobileContext';
import AuthorizationContext from '../../context/AuthorizationContext';

const HeaderComponent = (props) => {
  const {
    classes,
    history,
    signOut,
  } = props;
  const { isMobile } = useContext(MobileContext);
  const { user: authorizedUser } = useContext(AuthorizationContext);
  const currentLocation = history.location.pathname;
  const canShowSignUpPanel = !['/sign-in', '/sign-up'].includes(currentLocation);

  let ResultPanel = null;
  if (authorizedUser) {
    ResultPanel = (
      <div className={classes.actionPanel}>
        <Button className={classes.actionPanelButton}
          onClick={() => history.push(`/user/${authorizedUser.id}`)}
        >
          { isMobile ? <FontAwesomeIcon icon='user'/> : `Hello, ${authorizedUser.name}` }
        </Button>
        <Button className={classes.actionPanelButton}
          onClick={() => history.push('/post/create')}
        >
          { isMobile ? <FontAwesomeIcon icon='plus'/> : 'Create new Post' }
        </Button>
        <Button className={classes.actionPanelButton} onClick={signOut}>
          { isMobile ? <FontAwesomeIcon icon='sign-out-alt'/> : 'Sign Out' }
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
      <Link className={classes.brandTitle} to='/'>Blog</Link>
      {ResultPanel}
    </div>
  );
};

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  signOut: PropTypes.func,
};

export default withRouter(withStyles(HeaderComponentStyle)(HeaderComponent));
