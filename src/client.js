import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Application from './application';
import { SettingsProvider } from './context/settings';
import settings from '../config/settings';

loadableReady(() => ReactDOM.hydrate(
  <BrowserRouter>
    <SettingsProvider value={settings}>
      <Application>
        {renderRoutes(routes)}
      </Application>
    </SettingsProvider>
  </BrowserRouter>,
  document.getElementById('root'),
));
