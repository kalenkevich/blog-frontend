import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withLoading from '../../hocs/withLoading';
import PostComponentLoading from './PostComponentLoading';
import PostComponentStyle from './PostComponentStyle';
import PostForm from '../post-form';
import Button from '../common/button';
import Categories from '../categories';
import CommentList from '../comment-list';
import CommentCreate from '../comment-create';
import withAuthorization from '../../hocs/withAuthorization';
import RatePanel from '../rate-panel';
import { getFormattedDate } from '../../services/Formatter';
import MobileContext from '../../context/MobileContext';

const PostComponent = (props) => {
  const {
    classes,
    post,
    authorizedUser,
    getMoreCategories,
    onUpdate,
    onDelete,
    onAddComment,
    onUpdateComment,
    onDeleteComment,
    onRate,
    onCommentRate,
  } = props;

  if (!post) {
    return null;
  }

  const { isMobile } = useContext(MobileContext);
  const [isEditState, setEditState] = useState(false);
  const onEditClick = () => setEditState(true);
  const onCancelClick = () => setEditState(false);

  return (
    <>
      {isEditState
        ? <PostForm
          className={classes.form}
          post={post}
          getMoreCategories={getMoreCategories}
          onSave={onUpdate}
          onCancel={onCancelClick}
        />
        : <>
          <div className={classes.root}>
            <h3>{post.title}</h3>
            <p className={classes.contentPreview}>
              {post.content}
            </p>
            <div className={classes.footer}>
              <Link className={classes.createdUserName} to={`/user/${post.author.id}`}>@{post.author.name}</Link>
              {authorizedUser ? <RatePanel rate={post.rate} onRate={onRate}/> : null}
              <div className={classes.creationDate}>{getFormattedDate(post.creationDate)}</div>
            </div>
          </div>
          <Categories className={classes.categories} categories={post.categories}/>
        </>
      }
      { authorizedUser.id === post.author.id && !isEditState ? (
        <div className={classes.actionPanel}>
          <Button
            className={classes.actionPanelButton}
            onClick={onEditClick}
          >
            { isMobile ? <FontAwesomeIcon icon='pencil-alt'/> : 'Edit'}
          </Button>
          <Button
            className={classes.actionPanelButton}
            type='danger'
            onClick={onDelete}
          >
            { isMobile ? <FontAwesomeIcon icon='times'/> : 'Delete'}
          </Button>
        </div>
      ) : null }
      {authorizedUser && <CommentCreate className={classes.createComment} onAdd={onAddComment}/>}
      <CommentList
        className={classes.comments}
        comments={post.comments}
        onRate={onCommentRate}
        onUpdate={onUpdateComment}
        onDelete={onDeleteComment}
      />
    </>
  );
};

PostComponent.propTypes = {
  classes: PropTypes.object,
  post: PropTypes.object,
  authorizedUser: PropTypes.object,
  getMoreCategories: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  onAddComment: PropTypes.func,
  onUpdateComment: PropTypes.func,
  onDeleteComment: PropTypes.func,
  onRate: PropTypes.func,
  onCommentRate: PropTypes.func,
};

export const StyledPostComponent = withStyle(PostComponentStyle)(PostComponent);

export default withAuthorization(withLoading(PostComponentLoading)(StyledPostComponent));
