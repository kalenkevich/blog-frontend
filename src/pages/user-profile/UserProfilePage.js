import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import Posts from '../../components/post-list';
import UserProfile from '../../components/user-profile';
import UserProfilePageStyle from './UserProfilePageStyle';
import UserProfilePageService from './UserProfilePageService';
import PostService from '../../services/PostService';
import withAuthorization from '../../hocs/withAuthorization';

const UserProfilePage = (props) => {
  const { classes, match, authorizedUser } = props;
  const { userId } = match.params;
  const {
    user,
    isLoading,
    userPosts,
    onRate,
  } = getForUser(userId, authorizedUser);

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
        onRate={onRate}
        isLoading={isLoading}
      />
    </>
  );
};

export const getForUser = (id, authorizedUser) => {
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

  const onRate = async (post, rateAction) => {
    const action = rateAction === 'UP';
    const updatedPost = await PostService.ratePost(post.id, action);
    const updatedPosts = (userPosts || []).map((p) => {
      if (p.id === updatedPost.id) {
        return {
          ...p,
          rate: updatedPost.rate,
          ratedUsers: updatedPost.ratedUsers,
        };
      }

      return p;
    });

    setUserPosts(updatedPosts);
  };

  useEffect(() => {
    fetchUserAndPosts(id);
  }, []);

  return {
    user,
    userPosts,
    isLoading,
    onRate,
  };
};

UserProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
  authorizedUser: PropTypes.object,
  match: PropTypes.object,
};

export default withAuthorization(withRouter(withStyles(UserProfilePageStyle)(UserProfilePage)));
