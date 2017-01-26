/**
 * @webpack.entry
 */

import React from 'react';
import ReactDom from 'react-dom';
import domready from 'domready';


const App = () => (
  <h1>Hello World!</h1>
);


domready(() => {
  ReactDom.render(<App />, document.getElementById('app'));
});

