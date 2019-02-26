import React from 'react';
import PropTypes from 'prop-types';
import withStyles, { ThemeProvider } from 'react-jss';
import withSettings from './hocs/withSettings';
import Header from './components/header';
import theme from './theme';

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

const Application = ({ classes, children, settings }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header/>
      {settings.App.Name}
      {settings.App.Name}
      <div className={classes.applicationWrapper}>
        <div className={classes.application}>
          {children}
        </div>
      </div>
    </>
  </ThemeProvider>
);

Application.propTypes = {
  classes: PropTypes.object.isRequired,
  settings: PropTypes.object,
  children: PropTypes.node,
};

export const StyledApplication = withStyles(ApplicationStyles)(Application);

export default withSettings(StyledApplication);
