import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import { Link } from 'react-router-dom';
import Button from '../common/button';
import withLoading from '../../hocs/withLoading';
import PostComponentLoading from './PostComponentLoading';
import PostComponentStyle from './PostComponentStyle';
import Categories from '../categories';
import CommentList from '../comment-list';
import CommentCreate from '../comment-create';
import withAuthorization from '../../hocs/withAuthorization';
import { getFormattedDate } from '../../services/Formatter';

const PostComponent = (props) => {
  const {
    classes,
    post,
    authorizedUser,
    onAddComment,
    onUpdateComment,
    onDeleteComment,
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
          <div className={classes.createdUserPanel}>
            <span>Created by</span>
            <Link className={classes.createdUserName} to={`/user/${post.author.id}`}>{post.author.name}</Link>
          </div>
          {authorizedUser ? (
            <div className={classes.rateWrapper}>
              <Button className={classes.rateActionButton}>Up</Button>
              <div className={classes.rateLabel}>{post.rate}</div>
              <Button className={classes.rateActionButton}>Down</Button>
            </div>
          ) : null}
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
};

export const StyledPostComponent = withStyle(PostComponentStyle)(PostComponent);

export default withAuthorization(withLoading(PostComponentLoading)(StyledPostComponent));
