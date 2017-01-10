const fs = require('mz/fs');
const pathUtil = require('path');


const DATA_FILE_PATH = pathUtil.join(__dirname, 'books.json');


exports.findAll = function* () {
  return yield getDataList();
};



exports.get = function* (id) {
  const list = yield getDataList(id);
  return list.find(o => o.id === id);
}


function* getDataList() {
  const json = yield fs.readFile(DATA_FILE_PATH, 'utf-8');
  return JSON.parse(json);
}
