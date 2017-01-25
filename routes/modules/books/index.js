const assert = require('assert');


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
 * GET /books/new
 */
exports.new = function() {
  const { data, errors } = this.ctx.flash.changeset || this.Book.new();
  this.render({ book: data, errors });
};


/**
 * POST /books
 */
exports.create = function* () {
  const changeset = this.Book.changeset(null, this.params);
  if (changeset.valid) {
    const book = yield this.Book.save(changeset);
    console.log(book);
    this.redirect(`/books/${book.id}`);
  } else {
    this.ctx.flash.changeset = changeset;
    this.redirect(`/books/new`);
  }
  this.render();
};


/**
 * GET /books/${id}/edit
 */
exports.edit = function* () {
  const changeset = this.ctx.flash.changeset || {};
  const book = changeset.data || (yield this.Book.get(this.query.id));

  this.layout.data.pageTitle = 'Edit: ' + book.name;
  this.render({ book, errors: changeset.errors });
};


/**
 * PUT /books/${id}
 */
exports.update = function* () {
  const book = yield this.Book.get(this.query.id);
  assert(book);

  const changeset = this.Book.changeset(book, this.params);
  if (changeset.valid) {
    yield this.Book.save(changeset);
    this.redirect(`/books/${book.id}`);
  } else {
    this.ctx.flash.changeset = changeset;
    this.redirect(`/books/${book.id}/edit`);
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
