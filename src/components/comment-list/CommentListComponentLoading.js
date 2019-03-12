import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';

export const CommentsComponentLoading = theme => ({
  root: {
    margin: '10px 0',
    width: '100%',
    height: '150px',
    ...theme.loading,
  },
});

const CommentsComponent = (props) => {
  const { classes } = props;

  return (<div className={classes.root}/>);
};

CommentsComponent.propTypes = {
  classes: PropTypes.object,
  post: PropTypes.object,
};

export default withStyle(CommentsComponentLoading)(CommentsComponent);
