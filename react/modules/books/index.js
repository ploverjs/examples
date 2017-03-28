const assert = require('assert');


/**
 * GET /
 * GET /books
 */
exports.app = (ctx) => {
  ctx.layout = false;
  ctx.render();
};


/**
 * GET /api/books
 */
exports.index = async (ctx) => {
  const books =  await ctx.Book.findAll();
  ctx.render(books);
};


/**
 * GET /api/books/${id}
 */
exports.show = async (ctx) => {
  const book = await ctx.Book.get(ctx.query.id);
  ctx.render(book);
};


/**
 * POST /api/books
 */
exports.create = async (ctx) => {
  const changeset = ctx.Book.changeset(null, ctx.params);
  if (changeset.valid) {
    const book =  await ctx.Book.save(changeset);
    ctx.render({ success: true, book: book });
  } else {
    ctx.render({ success: false, errors: changeset.errors });
  }
}


/**
 * PUT /api/books/${id}
 */
exports.update = async (ctx) => {
  const book = await ctx.Book.get(ctx.query.id);
  assert(book);
  const changeset = ctx.Book.changeset(book, ctx.params);
  if (changeset.valid) {
    await ctx.Book.save(changeset);
    ctx.render({ success: true });
  } else {
    ctx.render({ success: false, errors: changeset.errors });
  }
};


/**
 * DELETE /api/books/${id}
 */
exports.delete = async (ctx) => {
  const id = ctx.query.id;
  await ctx.Book.delete(id);
  ctx.render({ success: true });
};
