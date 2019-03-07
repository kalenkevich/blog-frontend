import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { createPost } from './CreatePostPageService';
import CreatePostPageStyles from './CreatePostPageStyle';
import Button from '../../components/common/button';
import EditableCategories from '../../components/categories-editable';
import EditableLabel from '../../components/common/editable-label';
import EditableText from '../../components/common/editable-text';

const CreatePostPage = (props) => {
  const { classes } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState([]);

  return (
    <div className={classes.form}>
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
        className={classes.formField}
        categories={categories}
        onChange={setCategories}
      />
      <div className={`${classes.formField} ${classes.actionButtonPanel}`}>
        <Button className={classes.actionButton}>
          Cancel
        </Button>
        <Button className={classes.actionButton}
          onClick={() => createPost(title, content, categories)}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

CreatePostPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(CreatePostPageStyles)(CreatePostPage);
