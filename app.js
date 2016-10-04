'use strict';


/* eslint no-console: 0 */


const plover = require('plover');
const settings = require('./config/app');


if (require.main === module) {
  const app = plover(settings);
  const port = settings.server.port;
  app.listen(port);

  console.log(`server started: 127.0.0.1:${port}, env: ${settings.env || 'development'}`);
}
