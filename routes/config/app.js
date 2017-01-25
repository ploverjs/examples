const pathUtil = require('path');


/**
 * 服务器相关配置
 */
exports.server = {
  port: 4000
};


exports.services = {
  Book: pathUtil.join(__dirname, '../lib/models/Book.js')
};


exports.helpers = {
  priceHelper: pathUtil.join(__dirname, '../lib/helpers/price.js')
};


exports.web = {
  keys: ['99D4ABFE-B032-4D68-A616-F68FADB4BE2F']
};


exports.assets = {
  enableMiddleware: true,
  // urlPrefix: 'https://mycdn.com/routes',
  digest: true,
  vendors: [
    'bootstrap',
    'jquery'
  ]
};
