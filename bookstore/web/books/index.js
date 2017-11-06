const assert = require('assert');


/**
 * GET /books
 */
exports.index = async (ctx) => {
  const books = await ctx.Book.findAll();
  ctx.render({ books });
};


/**
 * GET /books/${id}
 */
exports.show = async (ctx) => {
  const book = await ctx.Book.get(ctx.query.id);
  if (!book) {
    ctx.throw(404, `can not find book ${ctx.query.id}`);
    return;
  }

  // 具体的action中可以设置布局中的数据
  ctx.layout.data.pageTitle = book.name;
  ctx.render({ book });
};


/**
 * GET /books/new
 */
exports.new = (ctx) => {
  const { data, errors } = ctx.ctx.flash.changeset || ctx.Book.new();
  ctx.render({ book: data, errors });
};


/**
 * POST /books
 */
exports.create = async (ctx) => {
  const changeset = ctx.Book.changeset(null, ctx.params);
  if (changeset.valid) {
    const book = await ctx.Book.save(changeset);
    ctx.redirect(`/books/${book.id}`);
  } else {
    ctx.ctx.flash.changeset = changeset;
    ctx.redirect('/books/new');
  }
};


/**
 * GET /books/${id}/edit
 */
exports.edit = async (ctx) => {
  const changeset = ctx.ctx.flash.changeset || {};
  const book = changeset.data || (await ctx.Book.get(ctx.query.id));

  ctx.layout.data.pageTitle = 'Edit: ' + book.name;
  ctx.render({ book, errors: changeset.errors });
};


/**
 * PUT /books/${id}
 */
exports.update = async (ctx) => {
  const book = await ctx.Book.get(ctx.query.id);
  assert(book);

  const changeset = ctx.Book.changeset(book, ctx.params);
  if (changeset.valid) {
    await ctx.Book.save(changeset);
    ctx.redirect(`/books/${book.id}`);
  } else {
    ctx.ctx.flash.changeset = changeset;
    ctx.redirect(`/books/${book.id}/edit`);
  }
};


/**
 * DELETE /books/${id}
 */
exports.delete = async (ctx) => {
  const id = ctx.query.id;
  await ctx.Book.delete(id);
  ctx.redirect('/books');
};
