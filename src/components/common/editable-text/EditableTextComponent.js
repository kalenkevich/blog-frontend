import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import EditableTextComponentStyles from './EditableTextComponentStyle';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import ContentPreview from './ContentPreview';

export const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

export const getBlockStyle = (block) => {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
};

const EditableTextComponent = (props) => {
  const {
    classes,
    className = '',
    value,
    onChange,
    placeholder,
    viewOnly,
  } = props;
  const [isEdit, setEditState] = useState(false);
  const [editor, setEditor] = useState();
  const [editorState, setState] = useState(value ? EditorState.createWithContent(stateFromHTML(value)) : EditorState.createEmpty());
  const focusEditor = () => editor.focus();
  const handleKeyCommand = (command, state) => {
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      setEditorState(newState);

      return true;
    }

    return false;
  };

  const setEditorState = (state) => {
    setState(state);
    onChange(stateToHTML(editorState.getCurrentContent()));
  };

  const mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4);
      if (newEditorState !== this.state.editorState) {
        setEditorState(newEditorState);
      }
      return null;
    }

    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  if (!isEdit) {
    return (
      <div
        onClick={() => setEditState(true)}
        className={`${classes.label} ${className} ${!value && placeholder ? 'placeholder' : ''}`}
      >
        <ContentPreview value={value}/>
      </div>
    );
  }

  const contentState = editorState.getCurrentContent();

  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  }

  return (
    <div className={`${classes.input} ${className}`} onClick={focusEditor}>
      <div className={classes.actionPanel}>
        <BlockStyleControls
          editorState={editorState}
          onToggle={toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
      </div>
      <div className={classes.editor}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          keyBindingFn={mapKeyToEditorCommand}
          placeholder={placeholder}
          ref={setEditor}
          spellCheck={true}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
};

EditableTextComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default withStyles(EditableTextComponentStyles)(EditableTextComponent);
