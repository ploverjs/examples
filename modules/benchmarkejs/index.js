'use strict';


exports.view = function* () {
  this.layout = {
    name: 'layout',
    data: {
      title: '淘宝 - 特色中国，再一次发现中国！发现最正宗的特色、美食、工艺品、老字号。'
    }
  };

  yield sleep(20);
  this.render();
};


exports.layout = function* () {
  const data = {
    spm: {
      id: 'a216r',
      value: '8181401'
    }
  };
  yield sleep(20);
  this.render(data);
};


exports.header = function* () {
  yield sleep(20);
  this.render();
};


exports.footer = function* () {
  yield sleep(20);
  this.render();
};


exports.banner = function* () {
  yield sleep(20);
  this.render();
};


exports.todayRecommend = function* () {
  yield sleep(20);
  this.render();
};


exports.newRoom = function* () {
  yield sleep(20);
  this.render();
};


exports.cats = function* () {
  yield sleep(20);
  this.render();
};


exports.likeRecommend = function* () {
  yield sleep(20);
  this.render();
};


exports.darenRecommend = function* () {
  yield sleep(20);
  this.render();
};


exports.newBlock = function* () {
  yield sleep(20);
  this.render();
};


exports.oldBlock = function* () {
  yield sleep(20);
  this.render();
};


exports.city = function* () {
  yield sleep(20);
  this.render();
};


exports.bottom = function* () {
  yield sleep(20);
  this.render();
};


function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

