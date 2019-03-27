import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import CommentListComponentStyle from './CommentListComponentStyle';
import Comment from '../comment';

const CommentListComponent = (props) => {
  const {
    classes,
    comments,
    onCommentClick = () => {},
    className,
    onUpdate,
    onDelete,
    onRate,
  } = props;

  return (
    <div className={`${classes.root} ${className}`}>
      {(comments || []).map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          onClick={() => onCommentClick(comment)}
          onUpdate={onUpdate}
          onDelete={() => onDelete(comment)}
          onRate={rateAction => onRate(comment, rateAction)}
        />
      ))}
    </div>
  );
};

CommentListComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  comments: PropTypes.array,
  onCommentClick: PropTypes.func,
  authorizedUser: PropTypes.object,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  onRate: PropTypes.func,
};

export default withStyles(CommentListComponentStyle)(CommentListComponent);
