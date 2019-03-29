import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import StyleButton from './StyleButton';
import { BlockStyles } from './BlockStyleControls';

export const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = (props) => {
  const {
    classes,
    editorState,
  } = props;
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className={classes.root}>
      {INLINE_STYLES.map(type => <StyleButton
        key={type.label}
        active={currentStyle.has(type.style)}
        label={type.label}
        onToggle={props.onToggle}
        style={type.style}
      />)}
    </div>
  );
};

InlineStyleControls.propTypes = {
  onToggle: PropTypes.func,
  classes: PropTypes.object,
  editorState: PropTypes.object,
};

export default withStyles(BlockStyles)(InlineStyleControls);
