import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';

export const style = theme => ({
  root: {
    height: '32px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color linear 100ms',
    outline: 'none',
    minWidth: '80px',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: theme.brandPrimaryColor,
    },
  },
});

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
