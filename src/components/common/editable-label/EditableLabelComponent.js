import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Input from '../input';
import EditableLabelComponentStyles from './EditableLabelComponentStyle';

const EditableLabelComponent = (props) => {
  const {
    classes,
    className = '',
    value,
    onChange,
    placeholder,
  } = props;
  const [isEdit, setEditState] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const onCloseEditState = () => {
    setEditState(false);

    if (currentValue) {
      onChange(currentValue);
    }
  };

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  if (!isEdit) {
    return (
      <div className={`${classes.label} ${className} ${!value && placeholder ? 'placeholder' : ''}`}
        onClick={() => setEditState(true)}
      >
        {value || placeholder}
      </div>
    );
  }

  return <Input
    className={`${classes.input} ${className}`}
    value={currentValue}
    onChange={e => setCurrentValue(e.target.value)}
    onBlur={onCloseEditState}
    placeholder={placeholder}
    autoFocus
  />;
};

EditableLabelComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default withStyles(EditableLabelComponentStyles)(EditableLabelComponent);
