import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Button from '../common/button';
import EditableText from '../common/editable-text';
import EditableLabel from '../common/editable-label';
import EditableCategories from '../categories-editable';
import PostFormStyles from './PostFormComponentStyle';

export const PostForm = (props) => {
  const {
    post,
    classes,
    className,
    getMoreCategories,
    onSave,
    onCancel,
  } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState([]);
  const onSaveClick = () => {
    onSave({
      title,
      content,
      categories,
    });
  };
  const onCancelClick = () => {
    resetValues();
    onCancel();
  };
  const resetValues = () => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setCategories(post.categories);
    } else {
      setTitle('');
      setContent('');
      setCategories([]);
    }
  };

  useEffect(() => {
    resetValues();
  }, [post]);

  return (
    <div className={`${classes.form} ${className}`}>
      <EditableLabel
        className={`${classes.formField} ${classes.title}`}
        value={title}
        placeholder={'Title'}
        onChange={setTitle}
      />
      <EditableText
        className={`${classes.formField} ${classes.content}`}
        placeholder={'Content'}
        value={content}
        onChange={setContent}
      />
      <EditableCategories
        className={`${classes.formField} ${classes.categories}`}
        categories={categories}
        onChange={setCategories}
        getMoreCategories={getMoreCategories}
      />
      <div className={`${classes.formField} ${classes.actionButtonPanel}`}>
        <Button className={classes.actionButtonPanelButton}
          onClick={onSaveClick}
        >
          Save
        </Button>
        <Button
          className={classes.actionButtonPanelButton}
          onClick={onCancelClick}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  post: PropTypes.object,
  classes: PropTypes.object,
  className: PropTypes.string,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  getMoreCategories: PropTypes.func,
};

export default withStyles(PostFormStyles)(PostForm);
