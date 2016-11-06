import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  form: {
    name: null
  },

  actions: {
    createCat () {
      let newCat = this.get('form');
      this.sendAction('createCat', newCat);
      this.set('form.name', null);
    }
  }
});
