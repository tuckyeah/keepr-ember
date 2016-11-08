import Ember from 'ember';

export default Ember.Route.extend({

  model (params) {
    this.get('store').findRecord('category-content', params.category_content_id);
  },

  actions: {
    createNote(cat_cont) {
      // console.log(cat_cont.notes);
      cat_cont.save();
    },
    back() {
      history.back();
    }
  }
});
