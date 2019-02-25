import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import TagListComponentStyle from './TagListComponentStyle';
import EditableLabel from '../common/editable-label';

const TagListEditableComponent = (props) => {
  const {
    classes,
    tags,
    onChange,
    className,
  } = props;
  const onTagChange = (tag, name) => {
    onChange((tags || []).map((currentTag) => {
      if (currentTag.id === tag.id) {
        return {
          ...currentTag,
          name,
        };
      }

      return currentTag;
    }));
  };
  const addNewTag = (tagName) => {
    onChange([...(tags || []), { id: Date.now(), name: tagName }]);
  };
  const removeTag = (tag) => {
    onChange((tags || []).filter(currentTag => currentTag.id !== tag.id));
  };

  return (
    <div className={`${classes.root} ${className}`}>
      {(tags || []).map(tag => (
        <div className={classes.tagItem} key={tag.id}>
          <EditableLabel
            className={classes.editTagItem}
            value={tag.name}
            onChange={newValue => onTagChange(tag, newValue)}
          />
          <span className={classes.tagItemRemove} onClick={() => removeTag(tag)}>x</span>
        </div>
      ))}
      <EditableLabel
        className={classes.newTagItem}
        value={''}
        placeholder='Add new tag'
        onChange={addNewTag}
      />
    </div>
  );
};

TagListEditableComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  tags: PropTypes.array,
  onChange: PropTypes.func,
};

export default withStyles(TagListComponentStyle)(TagListEditableComponent);
