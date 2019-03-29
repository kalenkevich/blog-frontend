import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { USER_ICON } from './IconType';
import userPlaceholder from '../../../assets/images/user-placeholder.jpg';

export const getIconByType = (type, className) => {
  switch (type) {
    case USER_ICON:
      return <img className={className} src={userPlaceholder}/>;
    default:
      return null;
  }
};

const Icon = ({ src, type, className = '' }) => {
  const [imageLoadFail, setImageLoadFail] = useState(false);

  if (!src || imageLoadFail) {
    return getIconByType(type, className);
  }

  return <img
    src={src}
    className={className}
    onError={() => setImageLoadFail(true)}
  />;
};

Icon.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
