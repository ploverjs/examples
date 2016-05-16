new Vue({
  el: '.hello-view',

  data: {
    message: 'Plover'
  },

  methods: {
    revert: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});
