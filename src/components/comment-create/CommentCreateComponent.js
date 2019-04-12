import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TextArea, MobileContext } from '@zenvo/core-ui';
import CommentCreateComponentStyle from './CommentCreateComponentStyle';

const CommentCreateComponent = (props) => {
  const { classes, onAdd, className } = props;
  const { isMobile } = useContext(MobileContext);
  const [comment, setComment] = useState('');
  const onCancelClick = () => setComment('');
  const onSaveClick = () => {
    if (!comment) {
      return;
    }

    onAdd({
      content: comment,
    });
  };

  return (
    <div className={`${classes.root} ${className}`}>
      <TextArea
        className={classes.textArea}
        value={comment}
        onChange={event => setComment(event.target.value)}
        placeholder={'Type your comment here'}
      />
      <div className={classes.actionPanel}>
        <Button className={classes.actionPanelButton} onClick={onSaveClick}>
          { isMobile ? <FontAwesomeIcon icon='plus'/> : 'Save'}
        </Button>
        <Button className={classes.actionPanelButton} onClick={onCancelClick}>
          { isMobile ? <FontAwesomeIcon icon='undo'/> : 'Cancel'}
        </Button>
      </div>
    </div>
  );
};

CommentCreateComponent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  onAdd: PropTypes.func,
};

export default withStyles(CommentCreateComponentStyle)(CommentCreateComponent);
