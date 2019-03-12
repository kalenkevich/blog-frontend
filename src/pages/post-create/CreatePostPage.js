import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import PostService from '../../services/PostService';
import CreatePostPageStyles from './CreatePostPageStyle';
import Button from '../../components/common/button';
import EditableCategories from '../../components/categories-editable';
import EditableLabel from '../../components/common/editable-label';
import EditableText from '../../components/common/editable-text';

const CreatePostPage = (props) => {
  const { classes, history } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState([]);
  const createPost = async () => {
    const post = await PostService.createPost(title, content, categories);

    history.push(`/post/${post.id}`);
  };
  const getMoreCategories = async (query) => {
    const fetchedCategories = await PostService.fetchCategories(query);

    setCategories(fetchedCategories);
  };

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
        getMoreCategories={getMoreCategories}
      />
      <div className={`${classes.formField} ${classes.actionButtonPanel}`}>
        <Button className={classes.actionButton}>
          Cancel
        </Button>
        <Button className={classes.actionButton}
          onClick={createPost}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

CreatePostPage.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(withStyles(CreatePostPageStyles)(CreatePostPage));
