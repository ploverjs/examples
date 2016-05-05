'use strict';


exports.view = function() {
  const data = {
    csrf: this.ctx.csrf
  };

  if (this.ctx.method === 'POST') {
    data.info = this.params.info;
  } else {
    data.info = {};
  }

  data.isEmpty = function(obj) {
    return !obj || Object.keys(obj).length === 0;
  };

  this.render(data);
};
