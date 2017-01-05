const webpack = require('webpack');

const path = require('path');
const assign = require('webpack-config-assign');

const HtmlWebpackPlugin = require('html-webpack-plugin');

function getConfig(env) {
  env = env || process.env.NODE_ENV;
  let config;
  try {
    config = require(path.resolve(`./webpack.config.${env}`));
  } catch (e) {
    config = {};
  }
  return config;
}

module.exports = assign({
  devtool: 'source-map',
  entry: {
    bundle: path.join(__dirname, 'src/index'),
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.', '.js', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: [
          'awesome-typescript-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      inject: 'body',
      template: path.join(__dirname, 'src', 'index.html')
    })
  ]
}, getConfig(process.env.NODE_ENV));
