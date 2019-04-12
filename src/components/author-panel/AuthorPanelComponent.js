import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from 'react-jss';
import { Icon } from '@zenvo/core-ui';
import AuthorPanelStyle from './AuthorPanelStyle';

const AuthorPanel = ({ classes, className, author }) => (
  <Link className={`${classes.root} ${className}`} to={`/user/${author.id}`}>
    <Icon className={classes.authorAvatar} src={author.avatarUrl} type={'USER_ICON'}/>
    <div className={classes.authorName}>{author.name}</div>
  </Link>
);

AuthorPanel.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  author: PropTypes.object,
};

export default withStyles(AuthorPanelStyle)(AuthorPanel);
