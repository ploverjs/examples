const pathUtil = require('path');


exports.server = {
  port: 4000
};


exports.web = {
  // koa-static配置参考：
  // https://github.com/koajs/static
  static: {
    root: pathUtil.join(__dirname, '../public')
  }
};
