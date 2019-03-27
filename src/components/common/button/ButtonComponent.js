import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import MobileContext from '../../../context/MobileContext';

export const style = theme => ({
  root: {
    minHeight: '32px',
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
    '&:disabled': {
      cursor: 'default',
      backgroundColor: theme.brandPrimaryColor,
    },
    '&.mobile': {
      minWidth: 'initial',
    },
  },
});

const ButtonComponent = (props) => {
  const {
    classes,
    children,
    onClick,
    className = '',
    disabled = false,
  } = props;
  const { isMobile } = useContext(MobileContext);

  return (
    <button
      className={`${classes.root} ${className} ${isMobile ? 'mobile' : ''}`}
      disabled={disabled}
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
  disabled: PropTypes.bool,
};

export default withStyle(style)(ButtonComponent);
