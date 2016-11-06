import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  model () {
    return this.get('store').findAll('category')
  },

  actions: {
    createCat (newCat) {
      let cat = this.get('store').createRecord('category', newCat);
      cat.save();
    }
  }
});
