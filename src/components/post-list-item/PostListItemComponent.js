import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Categories from '../categories';
import PostListItemComponentStyle from './PostListItemComponentStyle';
import { getFormattedDate } from '../../services/Formatter';
import withAuthorization from '../../hocs/withAuthorization';
import MobileContext from '../../context/MobileContext';
import RatePanel from '../rate-panel';

const PostListItem = (props) => {
  const {
    classes,
    post,
    onClick = () => {},
    authorizedUser,
    onRate,
  } = props;
  const { isMobile } = useContext(MobileContext);

  return (
    <>
      <div className={classes.root} onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}>
        <Link className={classes.title} to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <div className={classes.contentPreview}>{post.contentPreview}</div>
        <div className={classes.footer}>
          <Link className={classes.createdUserName} to={`/user/${post.author.id}`}>@{post.author.name}</Link>
          { authorizedUser ? <RatePanel rate={post.rate} onRate={onRate}/> : null}
          <div className={classes.commentsCount}>
            {post.commentsCount}
            <span className={classes.commentLabelWrapper}>
              { isMobile ? <FontAwesomeIcon className={classes.commentIcon} icon='comment-alt'/> : 'Comments' }
            </span>
          </div>
          <div className={classes.creationDate}>{getFormattedDate(post.creationDate)}</div>
        </div>
      </div>
      <Categories className={classes.categories} categories={post.categories}/>
    </>
  );
};

PostListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  authorizedUser: PropTypes.object,
  onClick: PropTypes.func,
  onScrolledToEnd: PropTypes.func,
  onRate: PropTypes.func,
};

export default withAuthorization(withStyles(PostListItemComponentStyle)(PostListItem));
