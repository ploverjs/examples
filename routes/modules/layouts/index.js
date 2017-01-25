exports.index = function() {
  this.data.pageName = this.route.root.module;

  // 具体的action会设置layout数据，通过this.data可以取得
  // @see books/index.js#show
  this.data.pageTitle = this.data.pageTitle || 'Hello Plover';
  this.render();
};
