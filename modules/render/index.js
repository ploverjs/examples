'use strict';


exports.beforeRender = function() {
  this.data.desc = '我是来自beforeRender的数据';
};


exports.view = function() {
  this.render();
};


exports.context = function() {
  const data = {
    title: '我是来自Action的数据',

    // come from middleware 'lib/middleware/site.js'
    siteViewData: this.siteViewData
  };

  this.render(data);
};


exports.child = function() {
  const books = [
    {
      subject: '岛上书店'
    },
    {
      subject: '抗日战争'
    },
    {
      subject: '兴盛与危机'
    },
    {
      subject: '何必等来生'
    },
    {
      subject: '再见，少年'
    }
  ];

  const data = {
    books: books
  };

  this.render(data);
};

