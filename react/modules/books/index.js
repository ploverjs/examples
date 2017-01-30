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

