const assert = require('assert');
const fs = require('mz/fs');
const pathUtil = require('path');
const _ = require('lodash');


const DATA_FILE_PATH = pathUtil.join(__dirname, 'books.json');


exports.findAll = async () => {
  return await getDataList();
};


exports.get = async (id) => {
  id = parseInt(id, 10);
  const list = await getDataList();
  return list.find(o => o.id === id);
};


exports.save = async (changeset) => {
  if (!changeset.valid) {
    throw new Error('invalid changeset');
  }

  const book = changeset.data;
  const list = await getDataList();
  if (book.id) {
    const index = list.findIndex(o => o.id === book.id);
    assert(index >= 0);
    list[index] = book;
  } else {
    const maxId = _.max(list.map(o => o.id));
    book.id = maxId + 1;
    list.push(book);
  }

  await updateDataList(list);

  return book;
};


exports.delete = async (id) => {
  id = parseInt(id, 10);
  const list = await getDataList();
  const index = list.findIndex(o => o.id === id);
  if (index !== -1) {
    list.splice(index, 1);
    await updateDataList(list);
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


async function getDataList() {
  const json = await fs.readFile(DATA_FILE_PATH, 'utf-8');
  return JSON.parse(json);
}


async function updateDataList(list) {
  const json = JSON.stringify(list);
  await fs.writeFile(DATA_FILE_PATH, json);
}
