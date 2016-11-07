import Ember from 'ember';

export default Ember.Route.extend({

  model (params) {
    return this.get('store').findRecord('category-content', params.category_content_id);
  }
});
