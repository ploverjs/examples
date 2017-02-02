import qs from 'query-string';


export default function ajax(url, options) {
  const opts = Object.assign({
    credentials: 'include'
  }, options);

  opts.data = Object.assign({}, opts.data);

  const { method } = opts;
  const csrf = getCsrf();

  if (['POST', 'PUT'].indexOf(method) !== -1) {
    opts.data._csrf = csrf;
  } else if (method === 'DELETE') {
    url = withQuery(url, { _csrf: csrf });
  }

  return window.fetch(url, opts)
    .then(res => res.json())
    .catch(e => {
      console.error(e);
    });
}


function getCsrf() {
  const elm = document.querySelector('meta[name=x-csrf]');
  return elm && elm.getAttribute('content');
}


function withQuery(url, query) {
  query = qs.stringify(query);
  return url + (url.indexOf('?' === -1) ? '?' : '&') + query;
}
