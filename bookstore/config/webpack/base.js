const pathUtil = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const appRoot = pathUtil.join(__dirname, '../..');
const srcPath = pathUtil.join(appRoot, 'static');
const distPath = pathUtil.join(appRoot, 'public/g');


/* eslint no-process-env: 0 */


const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('precss'),
      require('autoprefixer')()
    ]
  }
};


module.exports = {
  entry: {
    lib: [
      'jquery/dist/jquery.min.js',
      'bootstrap/dist/css/bootstrap.min.css'
    ],
    books: pathUtil.join(srcPath, 'books')
  },


  output: {
    path: distPath,
    filename: '[name].js',
    chunkFilename: "[id]-[chunkhash].js",
    publicPath: '/g/'
  },


  devtool: 'cheap-module-source-map',


  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            postcssLoader
          ]
        })
      },

      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader'
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.svg$/,
        use: [
          'raw-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: true }},
                { convertPathData: true },
                { removeStyleElement: true },
                { removeUselessDefs: true }
              ]
            }
          }
        ]
      },

      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0']
            }
          }
        ]
      }
    ]
  },


  plugins: [
    new CopyWebpackPlugin([{
      from: pathUtil.join(srcPath, 'public/')
    }]),

    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ]
};

