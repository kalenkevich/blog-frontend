import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, MobileContext, Header } from '@zenvo/core-ui';
import HeaderComponentStyle from './HeaderComponentStyle';
import AuthorizationContext from '../../context/AuthorizationContext';
import SettingsContext from '../../context/SettingsContext';

const HeaderComponent = (props) => {
  const {
    classes,
    history,
  } = props;
  const { isMobile } = useContext(MobileContext);
  const settings = useContext(SettingsContext);
  const { user: authorizedUser, signOut } = useContext(AuthorizationContext);
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
    <Header appName={settings.AppName}>
      {ResultPanel}
    </Header>
  );
};

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  signOut: PropTypes.func,
};

export default withRouter(withStyles(HeaderComponentStyle)(HeaderComponent));
