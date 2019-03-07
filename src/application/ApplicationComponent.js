import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Header from '../components/header';
import { SettingsProvider } from '../context/settings';
import { Authorization } from '../context/autorization';
import settings from '../../config/settings';
import ApplicationStyles from './ApplicationStyle';

const ApplicationComponent = ({ classes, children }) => (
  <SettingsProvider value={settings}>
    <Authorization>
      <>
        <Header/>
        <div className={classes.applicationWrapper}>
          <div className={classes.application}>
            {children}
          </div>
        </div>
      </>
    </Authorization>
  </SettingsProvider>
);

ApplicationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  settings: PropTypes.object,
  children: PropTypes.node,
};

export default withStyles(ApplicationStyles)(ApplicationComponent);
