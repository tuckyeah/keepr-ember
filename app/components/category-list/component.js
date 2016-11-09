import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit () {
      this.sendAction('edit', this.get('category'));
    },
    deleteThing (thing) {
      this.sendAction('deleteThing', thing);
    },
    showDetails (thing) {
      this.sendAction('showDetails', thing);
    },
    back() {
      this.sendAction('back');
    },
    toggleDone(thing) {
      this.sendAction('toggleDone', thing)
    },
  }
});
