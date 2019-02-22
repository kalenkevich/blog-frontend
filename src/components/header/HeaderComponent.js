import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const styles = {
  headerContainer: {
    height: '40px',
    border: '1px solid black',
    marginBottom: '10px',
  },
};

const HeaderComponent = (props) => {
  const { classes } = props;

  return (
    <div className={classes.headerContainer}>
      Header
    </div>
  );
};

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderComponent);
