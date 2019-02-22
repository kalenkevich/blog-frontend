const path = require('path');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV;
const isProductionMode = nodeEnv === 'production';
const globals = {
  ENVIRONMENT: JSON.stringify(nodeEnv || 'local'),
};

module.globals = globals;

module.exports = {
  context: path.resolve(__dirname, ''),
  resolve: { extensions: ['.js', '.jsx'] },
  mode: isProductionMode ? 'production' : 'development',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js(x?)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
