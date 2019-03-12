import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import TextArea from '../common/text-area';
import Button from '../common/button';
import CommentCreateComponentStyle from './CommentCreateComponentStyle';

const CommentCreateComponent = (props) => {
  const { classes, onAdd } = props;
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
    <div className={classes.root}>
      <TextArea
        className={classes.textArea}
        value={comment}
        onChange={event => setComment(event.target.value)}
        placeholder={'Type your comment here'}
      />
      <div className={classes.actionPanel}>
        <Button className={classes.actionPanelButton} onClick={onCancelClick}>Cancel</Button>
        <Button className={classes.actionPanelButton} onClick={onSaveClick}>Save</Button>
      </div>
    </div>
  );
};

CommentCreateComponent.propTypes = {
  classes: PropTypes.object,
  onAdd: PropTypes.func,
};

export default withStyles(CommentCreateComponentStyle)(CommentCreateComponent);
