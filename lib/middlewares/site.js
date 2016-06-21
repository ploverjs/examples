'use strict';


module.exports = function() {
  return function* (next) {
    this.state.siteViewData = {
      desc: '我的数据来自中间件lib/middlewares/site, 可以在控制器上下文中使用'
    };

    yield* next;
  };
};

