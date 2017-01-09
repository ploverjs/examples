module.exports = ({ get, resources }) => {
  get('/', 'books#index');

  resources('books');
};
