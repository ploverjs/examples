'use strict';


const request = require('request');
const pathUtil = require('path');
const resolveFrom = require('resolve-from');


exports.view = function* () {
  const root = this.settings.applicationRoot;
  const modules = yield* getModuleList(root);

  this.layout = {
    data: {
      title: 'Plover应用示例'
    }
  };

  const data = {
    desc: 'Plover - 专注于模块化的NodeJs Web框架',
    modules: modules
  };

  this.render(data);
};



const apiHost = 'http://registry.npmjs.com';    // /plover/latest

function* getModuleList(root) {
  const pkg = require(pathUtil.join(root, 'package.json'));
  const list = Object.keys(pkg.dependencies).map(function(name) {
    const path = resolveFrom(root, name + '/package.json');
    const info = require(path);
    const apiUrl = `${apiHost}/${name}/latest`;
    return new Promise(resolve => {
      request(apiUrl, (error, response, body) => {
        if (error) {
          resolve({});
        }

        const o = {
          name: name,
          local: info,
          remote: JSON.parse(body)
        };
        resolve(o);
      });
    });
  });
  return yield list;
}
