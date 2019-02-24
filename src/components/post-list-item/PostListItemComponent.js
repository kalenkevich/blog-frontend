import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Button from '../common/button';
import TagList from '../tag-list';
import PostListItemComponentStyle from './PostListItemComponentStyle';

const PostListItem = (props) => {
  const {
    classes,
    post,
    onClick = () => {},
  } = props;

  return (
    <>
      <div className={classes.root} onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}>
        <Link className={classes.title} to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <div className={classes.contentPreview}>{post.contentPreview}</div>
        <div className={classes.footer}>
          <div className={classes.createdUserPanel}>
            <span>Posted by</span>
            <Link className={classes.createdUserName} to={`/user/${post.user.id}`}>{post.user.name}</Link>
          </div>
          <div className={classes.rateWrapper}>
            <Button className={classes.rateActionButton}>Up</Button>
            <div className={classes.rateLabel}>{post.rate}</div>
            <Button className={classes.rateActionButton}>Down</Button>
          </div>
          <div className={classes.commentsCount}>Comments {post.commentsCount}</div>
          <div className={classes.creationDate}>{post.creationDate}</div>
        </div>
      </div>
      <TagList className={classes.tags} tags={post.tags}/>
    </>
  );
};

PostListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onScrolledToEnd: PropTypes.func,
};

export default withStyles(PostListItemComponentStyle)(PostListItem);
