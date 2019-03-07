import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'react-jss';
import routes from './routes';
import Application from './application/ApplicationComponent';
import theme from './theme';

loadableReady(() => ReactDOM.hydrate(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Application>
        {renderRoutes(routes)}
      </Application>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
));
