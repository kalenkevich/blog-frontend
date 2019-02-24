import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';
import Button from '../common/button';

export const CommentListComponentStyle = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  commentItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
    transition: 'background-color linear 100ms',
    marginRight: '5px',
    marginTop: '5px',
  },
  userPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: '0',
  },
  postedPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: '0',
  },
  rateWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5px',
  },
  content: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '0 10px',
    whiteSpace: 'pre-line',
  },
  creationDate: {
    display: 'flex',
    alignItems: 'flex-end',
    flexShrink: '0',
  },
  createdUserName: {
    color: theme.titleColor,
    '&:hover': {
      color: theme.titleHoverColor,
    },
    textDecoration: 'none',
  },
});

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
