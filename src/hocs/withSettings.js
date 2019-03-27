import React from 'react';
import { SettingsConsumer } from '../context/SettingsContext';

// eslint-disable-next-line react/display-name
export default Component => props => (
  <SettingsConsumer>
    {settings => <Component {...props} settings={settings}/>}
  </SettingsConsumer>
);
