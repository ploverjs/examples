exports.index = (ctx) => {
  ctx.type = 'json';
  ctx.render({ success: true, name: 'plover' });
};
