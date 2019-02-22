import createBrowserHistory from 'history/createBrowserHistory';

let history;

if (IS_CLIENT) {
  history = createBrowserHistory();
}

export default history;
