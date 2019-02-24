import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import withLoading from '../../hocs/withLoading';
import InfinityScroll from '../common/infinity-scroll';
import PostListItem from '../post-list-item';
import PostListLoading from './PostListComponentLoading';

export const styles = theme => ({
  mainPageContainer: {},
});

const PostList = (props) => {
  const {
    classes,
    posts,
    onScrolledToEnd,
  } = props;

  return (
    <InfinityScroll
      classes={{ root: classes.mainPageContainer }}
      onScrolledToEnd={onScrolledToEnd}
    >
      {(posts || []).map(post => (
        <PostListItem
          key={post.id}
          post={post}
        />
      ))}
    </InfinityScroll>
  );
};

PostList.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  onPostClick: PropTypes.func,
  onScrolledToEnd: PropTypes.func,
};

export const StyledPostPageList = withStyles(styles)(PostList);

export default withLoading(PostListLoading)(StyledPostPageList);
