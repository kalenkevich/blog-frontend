import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import TextArea from '../text-area';
import EditableTextComponentStyles from './EditableTextComponentStyle';

const EditableTextComponent = (props) => {
  const {
    classes,
    className = '',
    value,
    onChange,
    placeholder,
  } = props;
  const [isEdit, setEditState] = useState(false);
  const onValueChange = event => onChange(event.target.value);

  if (!isEdit) {
    return (
      <div className={`${classes.label} ${className} ${!value && placeholder ? 'placeholder' : ''}`}
        onClick={() => setEditState(true)}
      >
        {value || placeholder}
      </div>
    );
  }

  return <TextArea
    className={`${classes.input} ${className}`}
    value={value}
    onChange={onValueChange}
    onBlur={() => setEditState(false)}
    placeholder={placeholder}
    autoFocus
  />;
};

EditableTextComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default withStyles(EditableTextComponentStyles)(EditableTextComponent);
