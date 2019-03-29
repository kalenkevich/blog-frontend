import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const StyleButtonStyles = () => ({
  root: {
    color: '#999',
    cursor: 'pointer',
    marginRight: '16px',
    padding: '2px 0',
    display: 'inline-block',
    '&.active': {
      color: '#5890ff',
    },
  },
});

const StyleButton = (props) => {
  const {
    onToggle,
    style,
    active,
    classes,
    label,
  } = props;
  const toggle = () => onToggle(style);

  return (
    <span className={`${classes.root} ${active ? 'active' : ''}`} onMouseDown={toggle}>
      {label}
    </span>
  );
};

StyleButton.propTypes = {
  active: PropTypes.bool,
  classes: PropTypes.object,
  style: PropTypes.string,
  label: PropTypes.string,
  onToggle: PropTypes.func,
};

export default withStyles(StyleButtonStyles)(StyleButton);
