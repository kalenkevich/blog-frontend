import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Header from './components/header';

export const ApplicationStyles = {
  applicationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  application: {
    width: '1200px',
  },
};

const Application = ({ classes }) => (
  <>
    <Header/>
    <div className={classes.applicationWrapper}>
      <div className={classes.application}>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </div>
    </div>
  </>
);

Application.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(ApplicationStyles)(Application);
