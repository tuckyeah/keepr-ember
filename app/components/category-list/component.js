import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit () {
      this.sendAction('edit', this.get('category'));
    },
    createThing(newThing) {
      this.sendAction('createThing', newThing);
    }
  }
});
