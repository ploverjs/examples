exports.app = function() {
  this.layout = false;
  this.render();
};


exports.index = function* () {
  const books = yield this.Book.findAll();
  this.render(books);
};

