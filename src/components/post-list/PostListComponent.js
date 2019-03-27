import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import withLoading from '../../hocs/withLoading';
import InfinityScroll from '../common/infinity-scroll';
import PostListItem from '../post-list-item';
import PostListLoading from './PostListComponentLoading';
import PostListComponentStyle from './PostListComponentStyle';

const PostList = (props) => {
  const {
    classes,
    posts,
    className,
    onScrolledToEnd = () => {},
    onRate,
  } = props;

  if (!posts || posts.length === 0) {
    return (
      <div className={classes.emptyPlaceholder}>No any posts :(</div>
    );
  }

  return (
    <InfinityScroll className={`${className}`} onScrolledToEnd={onScrolledToEnd}>
      {(posts || []).map(post => (
        <PostListItem
          key={post.id}
          post={post}
          onRate={rateAction => onRate(post, rateAction)}
        />
      ))}
    </InfinityScroll>
  );
};

PostList.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  posts: PropTypes.array.isRequired,
  onPostClick: PropTypes.func,
  onScrolledToEnd: PropTypes.func,
  onRate: PropTypes.func,
};

export const StyledPostPageList = withStyles(PostListComponentStyle)(PostList);

export default withLoading(PostListLoading)(StyledPostPageList);
