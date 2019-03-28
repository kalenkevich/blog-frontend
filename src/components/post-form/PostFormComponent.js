import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../common/button';
import EditableText from '../common/editable-text';
import EditableLabel from '../common/editable-label';
import EditableCategories from '../categories-editable';
import PostFormStyles from './PostFormComponentStyle';
import MobileContext from '../../context/MobileContext';

export const PostForm = (props) => {
  const {
    post,
    classes,
    className,
    getMoreCategories,
    onSave,
    onCancel,
  } = props;
  const { isMobile } = useContext(MobileContext);
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
      <div className={`${classes.formField} ${classes.actionButtonPanel}`}>
        <Button className={classes.actionButtonPanelButton}
          onClick={onSaveClick}
        >
          { isMobile ? <FontAwesomeIcon icon='save'/> : 'Save'}
        </Button>
        <Button
          className={classes.actionButtonPanelButton}
          onClick={onCancelClick}
        >
          { isMobile ? <FontAwesomeIcon icon='undo'/> : 'Cancel'}
        </Button>
      </div>
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
