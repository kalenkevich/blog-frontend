import React from 'react';

export default LoadingComponent => {
  return (Component) => {
    return ({ isLoading, ...restProps}) => {
      if (isLoading) {
        return <LoadingComponent/>;
      }

      return <Component {...restProps} />;
    }
  }
}
