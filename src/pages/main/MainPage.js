import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const styles = {
  mainPageContainer: {
    width: '100%',
    height: '100%',
    border: '1px solid',
  },
};

const MainPage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.mainPageContainer}>
        Main Page
    </div>
  );
};

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
