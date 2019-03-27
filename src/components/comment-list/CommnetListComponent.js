import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';
import Button from '../common/button';
import { getFormattedDate } from '../../services/Formatter';
import CommentListComponentStyle from './CommentListComponentStyle';
import withAuthorization from '../../hocs/withAuthorization';

const CommentListComponent = (props) => {
  const {
    classes,
    comments,
    onCommentClick = () => {},
    className,
    authorizedUser,
    onDelete,
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
            <div className={classes.createdUserPanel}>
              <span>Posted by</span>
              <Link className={classes.createdUserName} to={`/user/${comment.author.id}`}>{comment.author.name}</Link>
            </div>
            {authorizedUser ? (
              <div className={classes.rateWrapper}>
                <Button className={classes.rateActionButton}>Up</Button>
                <div className={classes.rateLabel}>{comment.rate}</div>
                <Button className={classes.rateActionButton}>Down</Button>
              </div>
            ) : null}
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
};

export default withAuthorization(withStyles(CommentListComponentStyle)(CommentListComponent));
