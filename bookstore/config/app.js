const pathUtil = require('path');


/**
 * 服务器相关配置
 */
exports.server = {
  port: 4000
};


/**
 * 模块目录
 */
exports.modulesDir = pathUtil.join(__dirname, '../web');


exports.services = {
  Book: pathUtil.join(__dirname, '../lib/models/Book.js')
};


exports.helpers = {
  priceHelper: pathUtil.join(__dirname, '../lib/helpers/price.js')
};


exports.web = {
  // 用于设置app.keys, 实际应用需要重新产生一个
  keys: ['99D4ABFE-B032-4D68-A616-F68FADB4BE2F'],

  // https://github.com/koajs/response-time
  rtime: {},

  //favicon: pathUtil.join(__dirname, '../public/favicon.ico'),

  static: {
    root: pathUtil.join(__dirname, '../public')
  }
};


/**
 * 前端资源相关配置
 */
exports.assets = {
  // 只使用简单模式，前端资源主要由webpack处理
  simple: true,
  // 对资源进行hash重命名，适合发布到CDN等场景
  digest: true,
  // 资源前缀
  prefix: '/g',
  // 如果婺源发到CDN，则需要设置资源的URL前缀
  //urlPrefix: 'https://cdn.static.com/hello-react/'
};
