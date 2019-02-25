import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import InputComponentStyle from './InputComponentStyle';

const InputComponent = (props) => {
  const {
    classes,
    value,
    onChange,
    className = '',
    type = 'text',
    placeholder = '',
    onBlur = () => {},
    autoFocus = false,
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${classes.root} ${className}`}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      autoFocus={autoFocus}
    />
  );
};

InputComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default withStyle(InputComponentStyle)(InputComponent);
