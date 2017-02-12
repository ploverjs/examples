const pathUtil = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },


  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [];
        }
      }
    })
  ]
};



