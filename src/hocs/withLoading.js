import React from 'react';

// eslint-disable-next-line react/prop-types, react/display-name
export default LoadingComponent => Component => ({ isLoading, ...restProps }) => {
  if (isLoading) {
    return <LoadingComponent/>;
  }

  return <Component {...restProps} />;
};
