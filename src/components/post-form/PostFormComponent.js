import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, MobileContext } from '@zenvo/core-ui';
import AuthorPanel from '../author-panel';
import EditableText from '../editable-text';
import EditableLabel from '../editable-label';
import EditableCategories from '../categories-editable';
import PostFormStyles from './PostFormComponentStyle';
import AuthorizationContext from '../../context/AuthorizationContext';

export const PostForm = (props) => {
  const {
    post,
    classes,
    className,
    onSave,
    onCancel,
  } = props;
  const { isMobile } = useContext(MobileContext);
  const { user: authorizedUser } = useContext(AuthorizationContext);
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const [categories, setCategories] = useState(post ? post.categories : []);
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
      <div className={classes.authorPanel}>
        <AuthorPanel author={authorizedUser}/>
        <div className={classes.actionButtonPanel}>
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
      </div>
      <EditableCategories
        className={`${classes.categories}`}
        categories={categories}
        onChange={setCategories}
      />
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
    </div>
  );
};

PostForm.propTypes = {
  post: PropTypes.object,
  classes: PropTypes.object,
  className: PropTypes.string,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

export default withStyles(PostFormStyles)(PostForm);
