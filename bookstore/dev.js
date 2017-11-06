const { spawn } = require('child_process');
const livereload = require('livereload');


const cmds = [
  'nodemon --watch lib app.js',
  'npm run webpack'
];


cmds.forEach(cmd => {
  const list = cmd.split(/\s+/);
  spawn(list[0], list.slice(1), { stdio: [0, 1, 2] });
});


const lrserver = livereload.createServer();
lrserver.watch(__dirname, 'public/');

