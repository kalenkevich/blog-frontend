import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import {
  SettingsProvider,
  MobileApp,
} from '@zenvo/core-ui';
import Header from '../components/header';
import { Authorization } from '../context/AuthorizationContext';
import settings from '../../config/settings';
import ApplicationStyles from './ApplicationStyle';

const ApplicationComponent = ({ classes, children }) => (
  <SettingsProvider value={settings}>
    <Authorization>
      <MobileApp>
        <Header/>
        <div className={classes.applicationWrapper}>
          <div className={classes.application}>
            {children}
          </div>
        </div>
      </MobileApp>
    </Authorization>
  </SettingsProvider>
);

ApplicationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  settings: PropTypes.object,
  children: PropTypes.node,
};

export default withStyles(ApplicationStyles)(ApplicationComponent);
