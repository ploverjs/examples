const assert = require('assert');
const fs = require('mz/fs');
const pathUtil = require('path');
const _ = require('lodash');


const DATA_FILE_PATH = pathUtil.join(__dirname, 'books.json');


exports.findAll = function* () {
  return yield getDataList();
};


exports.get = function* (id) {
  id = parseInt(id, 10);
  const list = yield getDataList();
  return list.find(o => o.id === id);
};


exports.save = function* (changeset) {
  if (!changeset.valid) {
    throw new Error('invalid changeset');
  }

  const book = changeset.data;
  const list = yield getDataList();
  if (book.id) {
    const index = list.findIndex(o => o.id === book.id);
    assert(index >= 0)
    list[index] = book;
  } else {
    const maxId = _.max(list.map(o => o.id));
    book.id = maxId + 1;
    list.push(book);
  }

  yield updateDataList(list);

  return book;
};


exports.delete = function* (id) {
  id = parseInt(id, 10);
  const list = yield getDataList();
  const index = list.findIndex(o => o.id === id);
  if (index !== -1) {
    list.splice(index, 1);
    yield updateDataList(list);
    return true;
  }
  return false;
};


exports.new = function() {
  return this.changeset(null, { name: '一本新书', price: 0 });
};


exports.changeset = function(book, params) {
  book = book || { id: 0 };

  const name = params.name;
  const price = parseFloat(params.price);

  const errors = [];
  if (!name) {
    errors.push({ message: '名称不能为空。' });
  }
  if (!(price >= 0)) {
    errors.push({ message: '无效的价格。' });
  }

  const valid = errors.length === 0;
  const data = Object.assign({}, book, {
    name, price
  });

  return { valid, data, errors, params };
};


function* getDataList() {
  const json = yield fs.readFile(DATA_FILE_PATH, 'utf-8');
  return JSON.parse(json);
}


function* updateDataList(list) {
  const json = JSON.stringify(list);
  yield fs.writeFile(DATA_FILE_PATH, json);
}
