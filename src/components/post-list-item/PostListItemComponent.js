import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Categories from '../categories';
import PostListItemComponentStyle from './PostListItemComponentStyle';
import { getFormattedDate } from '../../services/Formatter';
import MobileContext from '../../context/MobileContext';
import AuthorizationContext from '../../context/AuthorizationContext';
import RatePanel from '../rate-panel';
import AuthorPanel from '../author-panel';
import ContentPreview from '../common/editable-text/ContentPreview';

const PostListItem = (props) => {
  const {
    classes,
    post,
    onClick = () => {},
    onRate,
  } = props;
  const { isMobile } = useContext(MobileContext);
  const { user: authorizedUser } = useContext(AuthorizationContext);

  return (
    <>
      <div className={classes.root} onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}>
        <AuthorPanel className={classes.authorPanel} author={post.author}/>
        <Link className={classes.title} to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
          <ContentPreview
            className={classes.contentPreview}
            value={post.contentPreview}
          />
        </Link>
        <div className={classes.footer}>
          { authorizedUser ? <RatePanel rate={post.rate} ratedUsers={post.ratedUsers} onRate={onRate}/> : null}
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
  onClick: PropTypes.func,
  onScrolledToEnd: PropTypes.func,
  onRate: PropTypes.func,
};

export default withStyles(PostListItemComponentStyle)(PostListItem);
