exports.index = function* () {
  const books = yield this.Book.findAll();
  this.render({ books });
};


exports.show = function* () {
  const id = parseInt(this.query.id, 10);
  const book = yield this.Book.get(id);

  if (!book) {
    this.throw(404, `can not find book #{id}`);
    return;
  }

  this.render({ book });
}
