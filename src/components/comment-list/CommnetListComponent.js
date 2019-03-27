import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';
import Button from '../common/button';
import { getFormattedDate } from '../../services/Formatter';
import CommentListComponentStyle from './CommentListComponentStyle';
import withAuthorization from '../../hocs/withAuthorization';
import RatePanel from '../rate-panel';

const CommentListComponent = (props) => {
  const {
    classes,
    comments,
    onCommentClick = () => {},
    className,
    authorizedUser,
    onDelete,
    onRate,
  } = props;
  const onDeleteButtonClick = ({ id }) => onDelete(id);

  return (
    <div className={`${classes.root} ${className}`}>
      {(comments || []).map(comment => (
        <div
          key={comment.id}
          onClick={() => onCommentClick(comment)}
          className={classes.commentItem}
        >
          <div className={classes.contentWrapper}>
            <p className={classes.content}>
              {comment.content}
            </p>
            {authorizedUser && authorizedUser.id === comment.author.id
              ? <Button
                onClick={(event) => {
                  event.stopPropagation();

                  onDeleteButtonClick(comment);
                }}>
                  Delete
              </Button>
              : null
            }
          </div>

          <div className={classes.footer}>
            <Link className={classes.createdUserName} to={`/user/${comment.author.id}`}>@{comment.author.name}</Link>
            {authorizedUser ? <RatePanel rate={comment.rate} onRate={rateAction => onRate(comment, rateAction)}/> : null}
            <div className={classes.creationDate}>{getFormattedDate(comment.creationDate)}</div>
          </div>
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
  authorizedUser: PropTypes.object,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  onRate: PropTypes.func,
};

export default withAuthorization(withStyles(CommentListComponentStyle)(CommentListComponent));
