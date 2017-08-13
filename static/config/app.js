const pathUtil = require('path');


exports.server = {
  port: 4000
};


exports.web = {
  keys: ['99D4ABFE-B032-4D68-A616-F68FADB4BE2F'],

  rtime: {},
  conditional: {},
  compress: {},
  etag: {},

  // koa-static配置参考：
  // https://github.com/koajs/static
  static: {
    root: pathUtil.join(__dirname, '../public')
  }
};
