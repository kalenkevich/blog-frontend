import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Button from '../common/button';

export const styles = {
  root: {
    border: '1px solid',
    margin: '5px',
    padding: '5px',
  },
  title: {},
  footer: {
    display: 'flex',
    borderTop: '1px solid',
    paddingTop: '5px',
    justifyContent: 'space-between',
  },
  userName: {},
  rateWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  rateLabel: {
    padding: '0 10px',
  },
  rateActionButton: {},
  commentsCount: {},
  creationDate: {},
};

const PostListItem = (props) => {
  const {
    classes,
    post,
    onClick = () => {},
  } = props;

  return (
    <div className={classes.root} onClick={(event) => { event.stopPropagation(); onClick(); }}>
      <Link className={classes.title} to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p className={classes.contentPreview}>{post.contentPreview}</p>
      <div className={classes.footer}>
        <div className={classes.userName}>
          <div>Created by</div>
          <Link to={`/user/${post.user.id}`}>{post.user.name}</Link>
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
  );
};

PostListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onScrolledToEnd: PropTypes.func,
};

export default withStyles(styles)(PostListItem);
