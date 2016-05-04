'use strict';


exports.view = function() {
  const data = {};
  if (this.ctx.method === 'POST') {
    data.info = this.request.body.info;
  }
  this.render(data);
};
