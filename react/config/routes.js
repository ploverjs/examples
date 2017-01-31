module.exports = ({ get, namespace, resources }) => {
  get('/', 'books:app');
  get('/books', 'books:app');
  get('/books/:id', 'books:app');


  namespace('api', { type: 'json' }, () => {
    resources('books');
  });
};

