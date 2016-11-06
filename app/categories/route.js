import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  queryParams: {
    user: {
      refreshModel: true
    }
  },

  model (params) {
    return this.get('store').query('category', params);
  },

  actions: {
    createCat (newCat) {
      let cat = this.get('store').createRecord('category', newCat);
      cat.save().then(() => {
        this.refresh();
      });
    },
    delete (category) {
      category.deleteRecord();
      category.save();
    }
  }
});
