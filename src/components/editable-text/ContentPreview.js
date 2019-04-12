import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import {
  Editor,
  EditorState,
} from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import { getBlockStyle, styleMap } from './EditableTextComponent';
import EditableTextComponentStyle from './EditableTextComponentStyle';

export const ContentPreviewStyles = (theme) => {
  const editableTextComponentStyle = EditableTextComponentStyle(theme);

  return {
    root: {
      ...editableTextComponentStyle.editor,
      cursor: 'default',
    },
  };
};

const ContentPreview = ({ classes, value, className }) => {
  const [editorState, setState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (value) {
      setState(EditorState.createWithContent(stateFromHTML(value)));
    }
  }, [value]);

  return (
    <div className={`${classes.root} ${className}`}>
      <Editor
        readOnly
        blockStyleFn={getBlockStyle}
        customStyleMap={styleMap}
        editorState={editorState}
        onChange={setState}
      />
    </div>
  );
};

ContentPreview.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default withStyles(ContentPreviewStyles)(ContentPreview);
