import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Application from './application';

loadableReady(() => ReactDOM.hydrate(
  <BrowserRouter>
    <Application>
      {renderRoutes(routes)}
    </Application>
  </BrowserRouter>,
  document.getElementById('root'),
));
