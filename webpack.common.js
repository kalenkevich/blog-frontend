const path = require('path');

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
    }, {
      test: /\.(png|jpg|gif|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      }],
    }],
  },
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
