import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import CommentsComponentLoading from '../comment-list/CommentListComponentLoading';

export const PostComponentLoadingStyle = theme => ({
  title: {
    width: '50%',
    height: '30px',
    ...theme.loading,
  },
  content: {
    margin: '10px 0',
    width: '100%',
    height: '500px',
    ...theme.loading,
  },
  footer: {
    margin: '10px 0',
    width: '100%',
    height: '100px',
    ...theme.loading,
  },
  comments: {
    marginTop: '50px',
  },
});

const PostComponent = (props) => {
  const { classes } = props;

  return (
    <>
      <div className={`${classes.root} ${classes.loading}`}>
        <div className={classes.title}/>
        <div className={classes.content}/>
        <div className={classes.footer}/>
      </div>
      <div className={classes.comments}>
        <CommentsComponentLoading/>
        <CommentsComponentLoading/>
        <CommentsComponentLoading/>
        <CommentsComponentLoading/>
      </div>
    </>
  );
};

PostComponent.propTypes = {
  classes: PropTypes.object,
  post: PropTypes.object,
};

export default withStyle(PostComponentLoadingStyle)(PostComponent);
