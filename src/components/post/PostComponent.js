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

const PostComponent = (props) => {
  const { classes, post } = props;

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
            <Link className={classes.createdUserName} to={`/user/${post.user.id}`}>{post.user.name}</Link>
          </div>
          <div className={classes.rateWrapper}>
            <Button className={classes.rateActionButton}>Up</Button>
            <div className={classes.rateLabel}>{post.rate}</div>
            <Button className={classes.rateActionButton}>Down</Button>
          </div>
          <div className={classes.creationDate}>{post.creationDate}</div>
        </div>
      </div>
      <Categories className={classes.categories} categories={post.categories}/>
      <CommentList className={classes.comments} comments={post.comments}/>
    </>
  );
};

PostComponent.propTypes = {
  classes: PropTypes.object,
  post: PropTypes.object,
};

export const StyledPostComponent = withStyle(PostComponentStyle)(PostComponent);

export default withLoading(PostComponentLoading)(StyledPostComponent);
