const assert = require('assert');


/**
 * GET /
 * GET /books
 */
exports.app = function() {
  this.layout = false;
  this.render();
};


/**
 * GET /api/books
 */
exports.index = function* () {
  const books = yield this.Book.findAll();
  this.render(books);
};


/**
 * GET /api/books/${id}
 */
exports.show = function* () {
  const book = yield this.Book.get(this.query.id);
  this.render(book);
};


/**
 * POST /api/books
 */
exports.create = function* () {
  const changeset = this.Book.changeset(null, this.params);
  if (changeset.valid) {
    const book = yield this.Book.save(changeset);
    this.render({ success: true, book: book });
  } else {
    this.render({ success: false, errors: changeset.errors });
  }
}


/**
 * PUT /api/books/${id}
 */
exports.update = function* () {
  const book = yield this.Book.get(this.query.id);
  assert(book);
  const changeset = this.Book.changeset(book, this.params);
  if (changeset.valid) {
    yield this.Book.save(changeset);
    this.render({ success: true });
  } else {
    this.render({ success: false, errors: changeset.errors });
  }
};


/**
 * DELETE /api/books/${id}
 */
exports.delete = function* () {
  const id = this.query.id;
  yield this.Book.delete(id);
  this.render({ success: true });
};
