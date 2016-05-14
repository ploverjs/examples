new Vue({
  el: '.hello-view',

  data: {
    name: 'plover'
  },

  methods: {
    greet: function() {
      alert(`hello ${this.name}`);
    }
  }
});
