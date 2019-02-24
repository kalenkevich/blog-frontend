import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';
import Button from '../common/button';
import CommentListComponentStyle from './CommentListComponentStyle';

const CommentListComponent = (props) => {
  const {
    classes,
    comments,
    onCommentClick,
    className,
  } = props;

  return (
    <div className={`${classes.root} ${className}`}>
      {(comments || []).map(comment => (
        <div
          key={comment.id}
          onClick={() => onCommentClick(comment)}
          className={classes.commentItem}
        >
          <div className={classes.userPanel}>
            <div className={classes.postedPanel}>
              <span>Posted by</span>
              <Link className={classes.createdUserName} to={`/user/${comment.author.id}`}>{comment.author.name}</Link>
            </div>
            <div className={classes.rateWrapper}>
              <Button className={classes.rateActionButton}>Up</Button>
              <div className={classes.rateLabel}>{comment.rate}</div>
              <Button className={classes.rateActionButton}>Down</Button>
            </div>
          </div>
          <div className={classes.content}>{comment.content}</div>
          <div className={classes.creationDate}>{comment.creationDate}</div>
        </div>
      ))}
    </div>
  );
};

CommentListComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  comments: PropTypes.array,
  onCommentClick: PropTypes.func,
};

export default withStyles(CommentListComponentStyle)(CommentListComponent);
