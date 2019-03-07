import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import CategoriesComponentStyle from './CategoriesComponentStyle';
import EditableLabel from '../common/editable-label';

const CategoriesEditableComponent = (props) => {
  const {
    classes,
    categories,
    onChange,
    className,
  } = props;
  const onCategoryChange = (category, value) => {
    onChange((categories || []).map((currentCategory) => {
      if (currentCategory.id === category.id) {
        return {
          ...currentCategory,
          value,
        };
      }

      return currentCategory;
    }));
  };
  const addNewCategory = (value) => {
    onChange([...(categories || []), { value }]);
  };
  const removeCategory = (category) => {
    onChange((categories || []).filter(currentCategory => currentCategory.id !== category.id));
  };

  return (
    <div className={`${classes.root} ${className}`}>
      {(categories || []).map(category => (
        <div className={classes.category} key={category.id}>
          <EditableLabel
            className={classes.editCategory}
            value={category.value}
            onChange={newValue => onCategoryChange(category, newValue)}
          />
          <span className={classes.removeCategory} onClick={() => removeCategory(category)}>x</span>
        </div>
      ))}
      <EditableLabel
        className={classes.newCategory}
        value={''}
        placeholder='Add new category'
        onChange={addNewCategory}
      />
    </div>
  );
};

CategoriesEditableComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  categories: PropTypes.array,
  onChange: PropTypes.func,
};

export default withStyles(CategoriesComponentStyle)(CategoriesEditableComponent);
