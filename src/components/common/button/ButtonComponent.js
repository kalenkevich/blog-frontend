import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';

export const style = {};

const ButtonComponent = (props) => {
  const {
    classes,
    children,
    onClick,
    className = '',
  } = props;

  return (
    <button
      className={`${classes.root} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default withStyle(style)(ButtonComponent);
