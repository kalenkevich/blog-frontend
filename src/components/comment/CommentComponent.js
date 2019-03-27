import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../common/button';
import TextArea from '../common/text-area';
import { getFormattedDate } from '../../services/Formatter';
import CommentComponentStyle from './CommentComponentStyle';
import withAuthorization from '../../hocs/withAuthorization';
import RatePanel from '../rate-panel';

const CommentListItemComponent = (props) => {
  const {
    classes,
    comment,
    onClick = () => {},
    authorizedUser,
    onDelete,
    onRate,
    onUpdate,
  } = props;
  const [commentContent, setCommentContent] = useState(comment.content);
  const [isEditState, setEditState] = useState(false);

  const onSaveChanges = () => {
    onUpdate({
      id: comment.id,
      content: commentContent,
    });
    setEditState(false);
  };

  const onCancelChanges = () => {
    setCommentContent(comment.content);
    setEditState(false);
  };

  return (
    <div
      key={comment.id}
      onClick={onClick}
      className={classes.comment}
    >
      <div className={classes.contentWrapper}>
        { isEditState
          ? <TextArea
            className={classes.contentTextArea}
            autoFocus
            value={commentContent}
            onChange={event => setCommentContent(event.target.value)}
          />
          : (
            <p className={classes.content}>
              {commentContent}
            </p>
          )
        }
        {authorizedUser && authorizedUser.id === comment.author.id
          ? (<div className={classes.actionPanel}>
            {(!isEditState
              ? <Button
                className={classes.actionPanelButton}
                onClick={(event) => {
                  event.stopPropagation();

                  setEditState(true);
                }}>
                <FontAwesomeIcon icon='pencil-alt'/>
              </Button>
              : <Fragment>
                <Button
                  className={classes.actionPanelButton}
                  onClick={(event) => {
                    event.stopPropagation();

                    onSaveChanges();
                  }}>
                  Save
                </Button>
                <Button
                  className={classes.actionPanelButton}
                  onClick={(event) => {
                    event.stopPropagation();

                    onCancelChanges();
                  }}>
                  Cancel
                </Button>
              </Fragment>
            )}
            <Button
              className={classes.actionPanelButton}
              onClick={(event) => {
                event.stopPropagation();

                onDelete();
              }}>
              <FontAwesomeIcon icon='times'/>
            </Button>
          </div>)
          : null
        }
      </div>
      <div className={classes.footer}>
        <Link className={classes.createdUserName} to={`/user/${comment.author.id}`}>@{comment.author.name}</Link>
        {authorizedUser
          ? <RatePanel rate={comment.rate} onRate={onRate}/>
          : null
        }
        <div className={classes.creationDate}>{getFormattedDate(comment.creationDate)}</div>
      </div>
    </div>
  );
};

CommentListItemComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  comment: PropTypes.object,
  onClick: PropTypes.func,
  authorizedUser: PropTypes.object,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  onRate: PropTypes.func,
};

export default withAuthorization(withStyles(CommentComponentStyle)(CommentListItemComponent));
