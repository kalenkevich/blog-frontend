const webpack = require('webpack');
const fetch = require('node-fetch');
const nodeExternals = require('webpack-node-externals');
const commonWebpackConfig = require('./webpack.common');
const { globals } = require('./webpack.common');

module.exports = {
  ...commonWebpackConfig,
  entry: {
    server: './src/server/index.js',
  },
  target: 'node',
  node: {
    __dirname: true,
    __filename: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    module: 'empty',
  },
  plugins: [
    ...commonWebpackConfig.plugins,
    new webpack.DefinePlugin({
      ...globals,
      IS_CLIENT: false,
      IS_SERVER: true,
      fetch,
    }),
  ],
  externals: nodeExternals(),
};
