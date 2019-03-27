import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import Posts from '../../components/post-list';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
import PostService from '../../services/PostService';
import MainPageStyle from './MainPageStyle';

const MainPage = (props) => {
  const { classes, history } = props;
  const {
    posts,
    fetchMore,
    isLoading,
    onRate,
    forSearchInput,
    forSearchButton,
  } = forPosts(history);

  return (
    <Fragment>
      <div className={classes.searchPanel}>
        <Input className={classes.searchPanelInput} {...forSearchInput}/>
        <Button className={classes.searchPanelButton} {...forSearchButton}>Search</Button>
      </div>
      <Posts
        posts={posts}
        onScrolledToEnd={fetchMore}
        onRate={onRate}
        isLoading={isLoading}
      />
    </Fragment>
  );
};

export const forPosts = (history) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setLoadingState] = useState(false);
  const [searchQuery, setSearchQuery] = useState(new URLSearchParams(history.location.search).get('query'));

  const fetchMore = () => setPage(page + 1);
  const fetchPosts = async () => {
    setLoadingState(true);

    if (searchQuery) {
      history.push({
        pathname: history.location.pathname,
        search: `?query=${searchQuery}`,
      });
      const foundedPosts = await PostService.searchPosts(searchQuery, page);

      setPosts(foundedPosts);
    } else {
      const newPosts = await PostService.getPosts(page);

      setPosts(newPosts);
    }

    setLoadingState(false);
  };

  const onRate = async (post, rateAction) => {
    await PostService.ratePost(post.id, rateAction);
    const updatedPosts = (posts || []).map((p) => {
      if (p.id === post.id) {
        return {
          ...p,
          rate: p.rate + (rateAction === 'UP' ? 1 : -1),
        };
      }

      return p;
    });

    setPosts(updatedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return {
    posts,
    fetchMore,
    isLoading,
    onRate,
    forSearchInput: {
      value: searchQuery || '',
      onChange: event => setSearchQuery(event.target.value),
    },
    forSearchButton: {
      onClick: () => fetchPosts(),
    },
  };
};

export const setSearchQuery = (searchQuery) => {
  window.location.query = searchQuery;
};

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default withRouter(withStyles(MainPageStyle)(MainPage));
