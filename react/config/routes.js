module.exports = ({ get, namespace, resources }) => {
  get('/', 'books:app');

  namespace('api', { type: 'json' }, () => {
    resources('books');
  });
};

