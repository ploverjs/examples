exports.index = (ctx) => {
  ctx.data.pageName = ctx.route.root.module;

  // 具体的action会设置layout数据，通过this.data可以取得
  // @see books/index.js#show
  ctx.data.pageTitle = ctx.data.pageTitle || 'Hello Plover';
  ctx.render();
};
