exports.index = (ctx) => {
  const data = {
    pageName: ctx.route.root.module,
    // @see books/index.js#show
    pageTitle: ctx.data.pageTitle || 'Hello Plover'
  };

  ctx.render(data);
};
