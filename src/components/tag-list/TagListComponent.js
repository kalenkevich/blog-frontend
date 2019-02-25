import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import TagListComponentStyle from './TagListComponentStyle';

const TagListComponent = (props) => {
  const {
    classes,
    tags,
    onTagClick,
    className,
  } = props;

  return (
    <div className={`${classes.root} ${className}`}>
      {(tags || []).map(tag => (
        <div key={tag.id}
          onClick={() => onTagClick(tag)}
          className={classes.tagItem}
        >
          {tag.name}
        </div>
      ))}
    </div>
  );
};

TagListComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  editable: PropTypes.bool,
  tags: PropTypes.array,
  onTagClick: PropTypes.func,
};

export default withStyles(TagListComponentStyle)(TagListComponent);
