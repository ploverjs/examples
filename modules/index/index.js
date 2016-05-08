'use strict';


exports.view = function* () {
  this.layout = {
    data: {
      title: 'Plover应用示例'
    }
  };

  const data = {
    desc: 'Plover - 专注于模块化的NodeJs Web框架'
  };

  this.render(data);
};
