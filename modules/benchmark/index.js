'use strict';


exports.view = function() {
  this.layout = {
    name: 'layout',
    data: {
      title: '淘宝 - 特色中国，再一次发现中国！发现最正宗的特色、美食、工艺品、老字号。'
    }
  };

  this.render();
};


exports.layout = function() {
  const data = {
    spm: {
      id: 'a216r',
      value: '8181401'
    }
  };
  this.render(data);
};


exports.header = function() {
  this.render();
};


exports.footer = function() {
  this.render();
};


exports.banner = function() {
  this.render();
};


exports.todayRecommand = function() {
  this.render();
};


exports.newRoom = function() {
  this.render();
};


exports.cats = function() {
  this.render();
};


exports.likeRecommend = function() {
  this.render();
};


exports.darenRecommend = function() {
  this.render();
};


exports.newBlock = function() {
  this.render();
};


exports.oldBlock = function() {
  this.render();
};


exports.city = function() {
  this.render();
};


exports.bootom = function() {
  this.render();
};

