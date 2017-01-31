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

