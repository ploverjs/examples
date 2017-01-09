exports.index = function* () {
  const books = yield this.Book.findAll();
  this.render({ books });
};
