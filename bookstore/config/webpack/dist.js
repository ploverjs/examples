const webpack = require('webpack');
const merge   = require('webpack-merge');
const base = require('./base');


const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(base, {
  output: {
    publicPath: '/g/'
  },

  plugins: [
    /** 定义一些环境变量 **/
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      PRODUCTION: true
    }),

    /** JS 压缩配置 **/
    //new webpack.optimize.UglifyJsPlugin(),

    /** 按模块的出现顺序排序 **/
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    /** 统计打包后的模块构成 **/
    new BundleAnalyzerPlugin({ analyzerMode: 'static' })
  ]
});


