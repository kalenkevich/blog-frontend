import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link, withRouter } from 'react-router-dom';
import Button from '../common/button';

export const styles = theme => ({
  headerContainer: {
    height: '40px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
  },
  brandTitle: {
    fontSize: '24px',
    textDecoration: 'none',
    color: theme.titleColor,
    '&:hover': {
      color: theme.titleHoverColor,
    },
  },
  actionPanel: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  actionPanelButton: {
    marginRight: '10px',
    '&:last-of-type': {
      marginRight: '0',
    },
  },
});

const HeaderComponent = (props) => {
  const { classes, history } = props;
  const currentLocation = history.location.pathname;
  const canShowSignPanel = !['/sign-in', '/sign-up'].includes(currentLocation);

  return (
    <div className={classes.headerContainer}>
      <Link className={classes.brandTitle} to='/'>Header</Link>
      { canShowSignPanel
        ? (<div className={classes.actionPanel}>
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
        </div>)
        : null}
    </div>
  );
};

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default withRouter(withStyles(styles)(HeaderComponent));
