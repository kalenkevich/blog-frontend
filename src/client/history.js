import createBrowserHistory from 'history/createBrowserHistory';

const history = IS_CLIENT ? createBrowserHistory() : null;

export default history;
