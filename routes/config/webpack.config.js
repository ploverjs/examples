const pathUtil = require('path');


module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },

  externals: {
    jquery: 'jQuery'
  }
};


