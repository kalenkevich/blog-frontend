import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Posts from '../../components/post-list';
import Input from '../../components/common/input';
import { getPosts, searchPosts } from './MainPageService';

export const styles = {
  mainPageContainer: {},
};

const MainPage = (props) => {
  const { classes } = props;
  const {
    posts,
    fetchMore,
    isLoading,
    forSearch,
  } = forPosts();

  return (
    <div className={classes.mainPageContainer}>
      <Input {...forSearch}/>
      <Posts
        posts={posts}
        onScrolledToEnd={fetchMore}
        isLoading={isLoading}
      />
    </div>
  );
};

export const forPosts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setLoadingState] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchPosts = async () => {
    setLoadingState(true);

    const fetchedPosts = searchQuery ? await searchPosts({ searchQuery, page }) : await getPosts({ page });

    setPosts(fetchedPosts);

    setLoadingState(false);
  };
  const fetchMore = () => setPage(page + 1);
  useEffect(() => {
    fetchPosts();
  }, [page, searchQuery]);

  return {
    posts,
    fetchMore,
    isLoading,
    forSearch: {
      value: searchQuery,
      onChange: event => setSearchQuery(event.target.value),
    },
  };
};

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
