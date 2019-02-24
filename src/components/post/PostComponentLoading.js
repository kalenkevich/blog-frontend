import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';

export const PostComponentLoadingStyle = theme => ({
  loading: theme.loading,
});

const PostComponent = (props) => {
  const { classes } = props;

  return (
    <div className={`${classes.root} ${classes.loading}`}>
      <div className={classes.title}/>
      <div className={classes.content}/>
      <div className={classes.footer}>
        <div className={classes.createdUserPanel}/>
        <div className={classes.rateWrapper}/>
        <div className={classes.creationDate}/>
      </div>
    </div>
  );
};

PostComponent.propTypes = {
  classes: PropTypes.object,
  post: PropTypes.object,
};

export default withStyle(PostComponentLoadingStyle)(PostComponent);
