module.exports = ({ get, resources }) => {
  get('/', 'topics#index');

  resources('topics');
};
