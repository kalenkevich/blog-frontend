import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';
import Header from '../components/header';

loadableReady(() => ReactDOM.hydrate(
  <>
    <Header/>
    <BrowserRouter>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root'),
));
