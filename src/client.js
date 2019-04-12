import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'react-jss';
import { Theme } from '@zenvo/core-ui';
import routes from './routes';
import Application from './application/ApplicationComponent';

loadableReady(() => ReactDOM.hydrate(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <Application>
        {renderRoutes(routes)}
      </Application>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
));
