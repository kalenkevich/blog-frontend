import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AuthorizationService from '../services/AuthorizationService';
import ApplicationLoading from '../application/ApplicationLoadingComponent';

const AuthorizationContext = React.createContext({
  user: null,
});

export const AuthorizationProvider = AuthorizationContext.Provider;

export const AuthorizationConsumer = AuthorizationContext.Consumer;

const AuthorizationComponent = ({ children }) => {
  const [authorizedUser, setAuthorizedUser] = useState(null);
  const [authorizationProcess, setAuthorizationProcessState] = useState(true);
  const authorize = async () => {
    let user = null;
    let error = null;

    try {
      user = await AuthorizationService.authorize();

      setAuthorizedUser(user);
    } catch (e) {
      error = e;
    } finally {
      setAuthorizationProcessState(false);
    }

    return [user, error];
  };
  useEffect(() => {
    authorize();
  }, []);

  return authorizationProcess ? <ApplicationLoading/> : (
    <AuthorizationProvider value={{
      user: authorizedUser,
    }}>
      {children}
    </AuthorizationProvider>
  );
};

AuthorizationComponent.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object,
};

export const Authorization = withRouter(AuthorizationComponent);

export default AuthorizationContext;
