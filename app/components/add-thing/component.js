import Ember from 'ember';

export default Ember.Component.extend({
  form: {
    name: null
  },

  actions: {
    createThing() {
      let newThing = this.get('form');
      newThing.category = this.get('category');
      this.sendAction('createThing', newThing);
      this.set('form.name', null);
    }
  }
});
