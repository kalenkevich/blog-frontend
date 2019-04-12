import React, { useState, Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TextArea, MobileContext } from '@zenvo/core-ui';
import { getFormattedDate } from '../../services/Formatter';
import CommentComponentStyle from './CommentComponentStyle';
import RatePanel from '../rate-panel';
import AuthorPanel from '../author-panel';
import AuthorizationContext from '../../context/AuthorizationContext';

const CommentListItemComponent = (props) => {
  const {
    classes,
    comment,
    onClick = () => {},
    onDelete,
    onRate,
    onUpdate,
  } = props;
  const { user: authorizedUser } = useContext(AuthorizationContext);
  const { isMobile } = useContext(MobileContext);
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
      <div className={classes.authorPanel}>
        <AuthorPanel author={comment.author}/>
        {authorizedUser && authorizedUser.id === comment.author.id
          ? (<div className={classes.actionPanel}>
            {(!isEditState
              ? <Button
                className={classes.actionPanelButton}
                onClick={(event) => {
                  event.stopPropagation();

                  setEditState(true);
                }}>
                { isMobile ? <FontAwesomeIcon icon='pencil-alt'/> : 'Edit'}
              </Button>
              : <Fragment>
                <Button
                  className={classes.actionPanelButton}
                  onClick={(event) => {
                    event.stopPropagation();

                    onSaveChanges();
                  }}>
                  { isMobile ? <FontAwesomeIcon icon='save'/> : 'Save'}
                </Button>
                <Button
                  className={classes.actionPanelButton}
                  onClick={(event) => {
                    event.stopPropagation();

                    onCancelChanges();
                  }}>
                  { isMobile ? <FontAwesomeIcon icon='undo'/> : 'Cancel'}
                </Button>
              </Fragment>
            )}
            <Button
              type='danger'
              className={classes.actionPanelButton}
              onClick={(event) => {
                event.stopPropagation();

                onDelete();
              }}>
              { isMobile ? <FontAwesomeIcon icon='times'/> : 'Delete'}
            </Button>
          </div>)
          : null
        }
      </div>
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
      </div>
      <div className={classes.footer}>
        {authorizedUser
          ? <RatePanel rate={comment.rate} ratedUsers={comment.ratedUsers} onRate={onRate}/>
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
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  onRate: PropTypes.func,
};

export default withStyles(CommentComponentStyle)(CommentListItemComponent);
