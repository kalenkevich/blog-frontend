import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withLoading from '../../hocs/withLoading';
import PostComponentLoading from './PostComponentLoading';
import PostComponentStyle from './PostComponentStyle';
import PostForm from '../post-form';
import Button from '../common/button';
import Categories from '../categories';
import AuthorPanel from '../author-panel';
import CommentList from '../comment-list';
import CommentCreate from '../comment-create';
import RatePanel from '../rate-panel';
import MobileContext from '../../context/MobileContext';
import AuthorizationContext from '../../context/AuthorizationContext';
import ContentPreview from '../common/editable-text/ContentPreview';
import { getFormattedDate } from '../../services/Formatter';

const PostComponent = (props) => {
  const {
    classes,
    post,
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
  const { user: authorizedUser } = useContext(AuthorizationContext);
  const [isEditState, setEditState] = useState(false);
  const onEditClick = () => setEditState(true);
  const onCancelClick = () => setEditState(false);

  return (
    <>
      {isEditState
        ? <PostForm
          className={classes.form}
          post={post}
          onSave={onUpdate}
          onCancel={onCancelClick}
        />
        : <>
          <div className={classes.root}>
            <div className={classes.authorPanel}>
              <AuthorPanel author={post.author}/>
              { authorizedUser && (authorizedUser.id === post.author.id && !isEditState) ? (
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
            </div>
            <h3>{post.title}</h3>
            <ContentPreview
              className={classes.contentPreview}
              value={post.content}
            />
            <div className={classes.footer}>
              {authorizedUser ? <RatePanel rate={post.rate} ratedUsers={post.ratedUsers} onRate={onRate}/> : null}
              <div className={classes.creationDate}>{getFormattedDate(post.creationDate)}</div>
            </div>
          </div>
          <Categories className={classes.categories} categories={post.categories}/>
        </>
      }
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
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  onAddComment: PropTypes.func,
  onUpdateComment: PropTypes.func,
  onDeleteComment: PropTypes.func,
  onRate: PropTypes.func,
  onCommentRate: PropTypes.func,
};

export const StyledPostComponent = withStyle(PostComponentStyle)(PostComponent);

export default withLoading(PostComponentLoading)(StyledPostComponent);
