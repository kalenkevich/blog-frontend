import React from 'react';
import PropTypes from 'prop-types';
import withStyles, { ThemeProvider } from 'react-jss';
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

const Application = ({ classes, children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header/>
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
  children: PropTypes.node,
};

export default withStyles(ApplicationStyles)(Application);
