import React from 'react';
import PropTypes from 'prop-types';

const InfinityScrollComponent = (props) => {
  const {
    classes = { root: '' },
    children,
  } = props;

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

InfinityScrollComponent.propTypes = {
  classes: PropTypes.object,
  onScrolledToEnd: PropTypes.func,
};

export default InfinityScrollComponent;
