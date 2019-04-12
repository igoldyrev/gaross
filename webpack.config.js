const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
    './src/style.scss',
  ],
  output:
  {
    path: path.resolve(__dirname, 'dist'),
    filename: './build/gaross.js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './build/gaross.css',
    }),
    new CopyWebpackPlugin([
      {
        from: './src/components/index/img',
        to: './img/index',
      },
      {
        from: './src/components/licenses/img',
        to: './img/licenses',
      },
      {
        from: './src/components/Orders/img',
        to: './img/orders',
      },
      {
        from: './src/components/Letters/img',
        to: './img/letters',
      },
      {
        from: './src/components/common_components/modal/img',
        to: './img/popup',
      },
      {
        from: './src/fa',
        to: './fa',
      },
      {
        from: './public',
        to: './',
      },
      {
        from: './pdf',
        to: './pdf',
      },
    ]),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};
