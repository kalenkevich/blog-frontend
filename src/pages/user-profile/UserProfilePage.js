import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import Posts from '../../components/post-list';
import UserProfile from '../../components/user-profile';
import UserProfilePageStyle from './UserProfilePageStyle';
import UserProfilePageService from './UserProfilePageService';

const UserProfilePage = (props) => {
  const { classes, match } = props;
  const { userId } = match.params;
  const { user, isLoading, userPosts } = getForUser(userId);

  return (
    <>
      <UserProfile
        className={classes.userProfile}
        user={user}
        isLoading={isLoading}
      />
      <Posts
        className={classes.userPosts}
        posts={userPosts}
        isLoading={isLoading}
      />
    </>
  );
};

export const getForUser = (id) => {
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const fetchUserAndPosts = async (userId) => {
    setLoadingState(true);

    const data = await UserProfilePageService.getUserAndPosts(userId);

    setUser(data.user);
    setUserPosts(data.posts);

    setLoadingState(false);
  };

  useEffect(() => {
    fetchUserAndPosts(id);
  }, []);

  return {
    user,
    userPosts,
    isLoading,
  };
};

UserProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object,
};

export default withRouter(withStyles(UserProfilePageStyle)(UserProfilePage));
