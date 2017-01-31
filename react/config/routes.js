module.exports = ({ get, namespace, resources }) => {
  get('/', 'books:app');
  get('/books', 'books:app');
  get('/books/*', 'books:app');


  namespace('api', { type: 'json' }, () => {
    resources('books');
  });
};

