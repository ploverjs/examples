'use strict';


exports.view = function() {
  const books = `
    * 高等数学
    * 概率论
    * 线性代数
      数学物理方程
    * 复变函数与积分变换
      数学建模
    * 工程矩阵
      随机过程
  `;

  const items = books.trim().split(/\n/g).map(title => {
    title = title.trim();
    if (title.startsWith('*')) {
      return { title: title.substr(1).trim(), import: true };
    }
    return { title: title };
  });

  this.render({ books: items });
};
