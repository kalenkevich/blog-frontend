import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AutocompleteComponent, Label } from '@zenvo/core-ui';
import CategoriesService from '../../services/CategoryService';
import CategoriesComponentStyle from './CategoriesComponentStyle';

const CategoriesEditableComponent = (props) => {
  const {
    classes,
    categories,
    onChange,
    className,
  } = props;

  const [currentInputValue, setCurrentInputValue] = useState('');
  const [fetchedCategories, setFetchedCategories] = useState([]);
  const onAddNewCategory = async (categoryValue) => {
    const { id, value } = await CategoriesService.addCategory(categoryValue);

    onChange([...categories, { id, value }]);
    setCurrentInputValue('');
    setFetchedCategories([]);
  };
  const onRemoveCategory = (category) => {
    onChange((categories || []).filter(currentCategory => currentCategory.id !== category.id));
  };
  const onSelectCategory = (option) => {
    onChange([...categories, { id: option.value, value: option.label }]);
    setCurrentInputValue('');
    setFetchedCategories([]);
  };
  const onValueChange = async (value) => {
    setCurrentInputValue(value);

    if (value) {
      const foundedCategories = await CategoriesService.searchCategories(value);

      setFetchedCategories(foundedCategories);
    }
  };
  const options = (fetchedCategories || []).map(({ id, value }) => ({
    value: id,
    label: value,
  }));

  return (
    <div className={`${classes.root} ${className}`}>
      {(categories || []).map(category => (
        <div className={classes.category} key={category.value}>
          <Label value={category.value}/>
          <span
            className={classes.removeCategory}
            onClick={() => onRemoveCategory(category)}
          >
            <FontAwesomeIcon icon='times'/>
          </span>
        </div>
      ))}
      <AutocompleteComponent
        className={classes.autocomplete}
        value={currentInputValue}
        options={options}
        onChange={onValueChange}
        onEnter={onAddNewCategory}
        onSelect={onSelectCategory}
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
