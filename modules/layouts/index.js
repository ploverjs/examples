'use strict';


exports.view = function() {
  const data = {
    keywords: [
      'NodeJs',
      'Web框架',
      'KOA',
      '模块化',
      '全栈开发'
    ]
  };
  this.render(data);
};
