import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { renderRoutes, matchRoutes } from 'react-router-config';
import routes from './routes';
import Application from './application';

const statsFile = path.resolve(__dirname, '../dist/loadable-stats.json');
const app = express();
const port = process.env.PORT || 8081;

const htmlTemplate = (reactDom, scriptTags, sheets) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta content="width=device-width,initial-scale=1" name="viewport">
      <title>SSR</title>
      <style type="text/css" id="server-side-styles">
        ${sheets.toString()}
      </style>
    </head>
    <body>
      <div id="root">${reactDom}</div>
    </body>
    ${scriptTags}
  </html>
`;

const renderMiddleware = async (req, res, next) => {
  const [{ route }] = matchRoutes(routes, req.originalUrl);

  if (route) {
    try {
      const extractor = new ChunkExtractor({ statsFile, entrypoints: ['client'] });
      const sheets = new SheetsRegistry();

      const reactApp = (
        <ChunkExtractorManager extractor={extractor}>
          <StaticRouter context={{}} location={req.originalUrl}>
            <JssProvider sheets={sheets}>
              <Application>
                {renderRoutes(routes)}
              </Application>
            </JssProvider>
          </StaticRouter>
        </ChunkExtractorManager>
      );
      const reactDom = renderToString(extractor.collectChunks(reactApp));
      const scriptTags = extractor.getScriptTags();

      res.writeHead(200, { 'Content-Type': 'text/html' });

      return res.end(htmlTemplate(reactDom, scriptTags, sheets));
    } catch (error) {
      return next(error);
    }
  }

  return next(req, res);
};

app.get('*', renderMiddleware);
app.use(express.static('public'));

app.listen(port, () => console.log('Server running of port:', port));

export default app;
