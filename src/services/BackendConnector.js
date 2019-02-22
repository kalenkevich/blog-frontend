let headers = { 'Content-type': 'Application/json' };

export const setHeaders = (newHeaders) => {
  headers = newHeaders;
};

export const get = url => makeRequest(url, { method: 'GET', headers });

export const post = (url, body) => makeRequest(url, { method: 'POST', body, headers });

export const makeRequest = (url, options) => fetch(url, options).then(data => data.json());
