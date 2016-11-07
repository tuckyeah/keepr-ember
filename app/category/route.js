import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('category', params.category_id);
  },

  actions: {
    edit (category) {
      this.transitionTo('category.edit', category);
    }
  }
});
