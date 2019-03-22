const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
    './src/style.scss'
  ],
  output:
  {
      path: path.resolve(__dirname, 'dist'),
      filename: 'gaross.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ]
      }
    ]
  },
  plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
          filename: "gaross.css"
      })
      // new CopyWebpackPlugin([
      //   {
      //     from: './src/svg',
      //      to: './svg'
      //   },
      //   {
      //     from: './src/pdf',
      //     to: './pdf'
      //   },
      //   {
      //     from: './src/pages',
      //     to: './'
      //   },
      //   {
      //     from: './src/html',
      //     to: './blocks'
      //   },
      //   {
      //     from: './src/fa',
      //     to: './fa'
      //   },
      //   {
      //     from: './src/technical_files',
      //     to: './'
      //   }
      // ]),
  ]
};
