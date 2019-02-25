import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { createPost } from './CreatePostPageService';
import CreatePostPageStyles from './CreatePostPageStyle';
import Button from '../../components/common/button';
import EditableTags from '../../components/tag-list-editable';
import EditableLabel from '../../components/common/editable-label';
import EditableText from '../../components/common/editable-text';

const CreatePostPage = (props) => {
  const { classes } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

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
      <EditableTags
        className={classes.formField}
        tags={tags}
        onChange={setTags}
      />
      <div className={`${classes.formField} ${classes.actionButtonPanel}`}>
        <Button className={classes.actionButton}>
          Cancel
        </Button>
        <Button className={classes.actionButton}
          onClick={() => createPost(title, content, tags)}
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
