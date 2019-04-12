import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Icon } from '@zenvo/core-ui';
import withLoading from '../../hocs/withLoading';
import UserProfileComponentStyle from './UserProfileComponentStyle';
import UserProfileComponentLoading from './UserProfileComponentLoading';

const UserProfileComponent = (props) => {
  const {
    classes,
    className,
    user,
  } = props;

  return (
    <div className={`${className} ${classes.userProfilePageContainer}`}>
      <div>
        <Icon className={classes.userAvatarUrl} src={user.avatarUrl} type={'USER_ICON'}/>
      </div>
      <div className={classes.userDetails}>
        <div className={classes.userName}>{user.name}</div>
        <div className={classes.userDescription}>{user.description}</div>
      </div>
    </div>
  );
};

UserProfileComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  user: PropTypes.object,
};

export const StyledUserProfileComponent = withStyles(UserProfileComponentStyle)(UserProfileComponent);

export default withLoading(UserProfileComponentLoading)(StyledUserProfileComponent);
