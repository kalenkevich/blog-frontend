import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import { Link } from 'react-router-dom';
import withLoading from '../../hocs/withLoading';
import PostComponentLoading from './PostComponentLoading';
import PostComponentStyle from './PostComponentStyle';
import Categories from '../categories';
import CommentList from '../comment-list';
import CommentCreate from '../comment-create';
import withAuthorization from '../../hocs/withAuthorization';
import RatePanel from '../rate-panel';
import { getFormattedDate } from '../../services/Formatter';

const PostComponent = (props) => {
  const {
    classes,
    post,
    authorizedUser,
    onAddComment,
    onUpdateComment,
    onDeleteComment,
    onRate,
  } = props;

  if (!post) {
    return null;
  }

  return (
    <>
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
      {authorizedUser && <CommentCreate onAdd={onAddComment}/>}
      <CommentList
        className={classes.comments}
        comments={post.comments}
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
  onAddComment: PropTypes.func,
  onUpdateComment: PropTypes.func,
  onDeleteComment: PropTypes.func,
  onRate: PropTypes.func,
};

export const StyledPostComponent = withStyle(PostComponentStyle)(PostComponent);

export default withAuthorization(withLoading(PostComponentLoading)(StyledPostComponent));
