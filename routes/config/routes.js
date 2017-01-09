module.exports = ({ get, resources }) => {
  get('/', 'home#index');

  resources('topics');
};
