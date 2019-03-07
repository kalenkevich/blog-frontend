import React from 'react';
import { AuthorizationConsumer } from '../context/autorization';

// eslint-disable-next-line react/display-name
export default Component => props => (
  <AuthorizationConsumer>
    {({ user, ...authActions }) => <Component {...props} authorizedUser={user} {...authActions} />}
  </AuthorizationConsumer>
);
