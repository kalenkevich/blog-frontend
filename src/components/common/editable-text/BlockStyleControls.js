import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import StyleButton from './StyleButton';

export const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

export const BlockStyles = () => ({
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    fontSize: '14px',
    marginBottom: '5px',
    userSelect: 'none',
  },
});

const BlockStyleControls = (props) => {
  const { editorState, classes } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className={classes.root}>
      {BLOCK_TYPES.map(type => <StyleButton
        key={type.label}
        active={type.style === blockType}
        label={type.label}
        onToggle={props.onToggle}
        style={type.style}
      />)}
    </div>
  );
};

BlockStyleControls.propTypes = {
  classes: PropTypes.object,
  onToggle: PropTypes.func,
  editorState: PropTypes.object,
};

export default withStyles(BlockStyles)(BlockStyleControls);
