import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';

export const style = {};

const InputComponent = (props) => {
  const {
    classes,
    value,
    onChange,
  } = props;

  return (
    <input
      type='text'
      className={classes.root}
      value={value}
      onChange={onChange}
    />
  );
};

InputComponent.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyle(style)(InputComponent);
