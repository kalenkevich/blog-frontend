import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import CategoriesComponentStyle from './CategoriesComponentStyle';

const CategoriesComponent = (props) => {
  const {
    classes,
    categories,
    onCategoryClick,
    className,
  } = props;

  return (
    <div className={`${classes.root} ${className}`}>
      {(categories || []).map(category => (
        <div key={category.id}
          onClick={() => onCategoryClick(category)}
          className={classes.category}
        >
          {category.value}
        </div>
      ))}
    </div>
  );
};

CategoriesComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  editable: PropTypes.bool,
  categories: PropTypes.array,
  onCategoryClick: PropTypes.func,
};

export default withStyles(CategoriesComponentStyle)(CategoriesComponent);
