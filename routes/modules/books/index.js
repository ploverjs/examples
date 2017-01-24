/**
 * GET /books
 */
exports.index = function* () {
  const books = yield this.Book.findAll();
  this.render({ books });
};


/**
 * GET /books/${id}
 */
exports.show = function* () {
  const book = yield this.Book.get(this.query.id);
  if (!book) {
    this.throw(404, `can not find book #{id}`);
    return;
  }

  // 具体的action中可以设置布局中的数据
  this.layout.data.pageTitle = book.name;

  this.render({ book });
};


/**
 * GET /books/${id}/edit
 */
exports.edit = function* () {
  const book = yield this.Book.get(this.query.id);
  this.layout.data.pageTitle = 'Edit: ' + book.name;
  this.render({ book, errors: this.ctx.flash.errors });
};


/**
 * PUT /books/${id}
 */
exports.update = function* () {
  const id = this.query.id;
  const o = yield this.Book.update(id, this.params);
  if (o.success) {
    this.redirect(`/books/${id}`);
  } else {
    this.ctx.flash.errors = o.errors;
    this.redirect(`/books/${id}/edit`);
  }
};


/**
 * DELETE /books/${id}
 */
exports.delete = function* () {
  const id = this.query.id;
  yield this.Book.delete(id);
  this.redirect('/books');
}
