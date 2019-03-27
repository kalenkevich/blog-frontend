import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Button from '../common/button';
import Categories from '../categories';
import PostListItemComponentStyle from './PostListItemComponentStyle';
import { getFormattedDate } from '../../services/Formatter';
import withAuthorization from '../../hocs/withAuthorization';

const PostListItem = (props) => {
  const {
    classes,
    post,
    onClick = () => {},
    authorizedUser,
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
            <Link className={classes.createdUserName} to={`/user/${post.author.id}`}>{post.author.name}</Link>
          </div>
          {authorizedUser ? (
            <div className={classes.rateWrapper}>
              <Button className={classes.rateActionButton}>Up</Button>
              <div className={classes.rateLabel}>{post.rate}</div>
              <Button className={classes.rateActionButton}>Down</Button>
            </div>
          ) : null}
          <div className={classes.commentsCount}>{post.commentsCount} comments</div>
          <div className={classes.creationDate}>{getFormattedDate(post.creationDate)}</div>
        </div>
      </div>
      <Categories className={classes.categories} categories={post.categories}/>
    </>
  );
};

PostListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  authorizedUser: PropTypes.object,
  onClick: PropTypes.func,
  onScrolledToEnd: PropTypes.func,
};

export default withAuthorization(withStyles(PostListItemComponentStyle)(PostListItem));
