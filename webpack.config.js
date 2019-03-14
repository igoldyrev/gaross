const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output:
  {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
  },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
      ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([
        //   {
        //     from: './src/img',
        //      to: './img'
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
