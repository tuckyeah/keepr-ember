import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('category-content', params.id);
  },

  actions: {
    createNote(cat_cont) {
      // console.log(cat_cont.notes);
      cat_cont.save();
    },
    back() {
      history.back();
    },
    toggleDone(content) {
      content.toggleProperty('done');
      content.save()
      .then(()=>{
        this.refresh();
      });
    }
  }
});
