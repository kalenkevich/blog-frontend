import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';

export const style = theme => ({
  root: {
    height: '32px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
    backgroundColor: 'transparent',
    outline: 'none',
    minWidth: '300px',
    padding: '5px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
});

const InputComponent = (props) => {
  const {
    classes,
    value,
    onChange,
    className = '',
    type = 'text',
    placeholder = '',
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${classes.root} ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

InputComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default withStyle(style)(InputComponent);
