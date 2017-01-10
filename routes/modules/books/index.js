exports.index = function* () {
  const books = yield this.Book.findAll();
  this.render({ books });
};


exports.show = function* () {
  const id = parseInt(this.query.id, 10);
  const book = yield getBook(this);

  if (!book) {
    this.throw(404, `can not find book #{id}`);
    return;
  }

  // 具体的action中可以设置布局中的数据
  this.layout.data.pageTitle = book.name;

  this.render({ book });
};


exports.edit = function* () {
  const book = yield getBook(this);
  this.layout.data.pageTitle = 'Edit: ' + book.name;
  this.render({ book });
};


function* getBook(ctx) {
  const id = parseInt(ctx.query.id, 10);
  return yield ctx.Book.get(id);
}
