import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Posts from '../../components/post-list';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
import { getPosts, searchPosts } from './MainPageService';

export const styles = {
  mainPageContainer: {},
  searchPanel: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginBottom: '50px',
  },
  searchPanelButton: {
    marginLeft: '10px',
    height: '44px',
  },
  searchPanelInput: {
    width: '100%',
    height: '44px',
  },
};

const MainPage = (props) => {
  const { classes } = props;
  const {
    posts,
    fetchMore,
    isLoading,
    forSearchInput,
    forSearchButton,
  } = forPosts();

  return (
    <div className={classes.mainPageContainer}>
      <div className={classes.searchPanel}>
        <Input className={classes.searchPanelInput} {...forSearchInput}/>
        <Button className={classes.searchPanelButton} {...forSearchButton}>Search</Button>
      </div>
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

  const fetchMore = () => setPage(page + 1);
  const fetchPosts = async () => {
    setLoadingState(true);

    const fetchedPosts = searchQuery ? await searchPosts({ searchQuery, page }) : await getPosts({ page });

    setPosts(fetchedPosts);

    setLoadingState(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return {
    posts,
    fetchMore,
    isLoading,
    forSearchInput: {
      value: searchQuery,
      onChange: event => setSearchQuery(event.target.value),
    },
    forSearchButton: {
      onClick: () => fetchPosts(),
    },
  };
};

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
