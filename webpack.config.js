const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './src/main.js',
        './src/library.blocks/img/img.js',
      './src/common.blocks/navigation/navigation.js',
        './src/style.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './build/gaross.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: 'env'
                }
            }
        },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'src'),
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true,
                            url: false
                        }
                    },
                      {
                        loader: 'postcss-loader'
                      },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './build/gaross.css',
            allChunks: true,
        }),
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            {
                from: './src/img',
                to: './img'
            },
            {
                from: './src/pages',
                to: './'
            },
            {
                from: './src/html',
                to: './blocks'
            }
        ]),
    ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  }
};
