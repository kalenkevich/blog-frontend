import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const TagListComponentStyle = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tagItem: {
    padding: '5px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
    transition: 'background-color linear 100ms',
    marginRight: '5px',
    marginTop: '5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.brandPrimaryColor,
    },
    '&:last-of-type': {
      marginRight: '0',
    },
  },
});

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
  tags: PropTypes.array,
  onTagClick: PropTypes.func,
};

export default withStyles(TagListComponentStyle)(TagListComponent);
