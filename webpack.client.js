const webpack = require('webpack');
const commonWebpackConfig = require('./webpack.common');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { globals } = require('./webpack.common');

module.exports = {
  ...commonWebpackConfig,
  entry: {
    client: './src/client/index.js',
  },
  target: 'web',
  devServer: {
    contentBase: './src',
    hot: true,
    historyApiFallback: true,
    stats: {
      version: true,
      timings: true,
      errors: true,
      warnings: true,
    },
  },
  plugins: [
    ...commonWebpackConfig.plugins,
    new CleanWebpackPlugin('dist'),
    new LoadablePlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      ...globals,
      IS_CLIENT: true,
      IS_SERVER: false,
    }),
  ],
};
