import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model (params) {
    return this.get('store').findRecord('category-content', (params.category_content_id));

  },
  actions: {
    createNote(cat_cont) {
      cat_cont.save();
    },
    back(done_status) {
      console.log(done_status);
      history.back();
    },
    toggleDone(content) {
      content.toggleProperty('done');
      content.save()
      .then(()=>{
        this.refresh();
      });
    },
    deleteContent(content) {
      content.deleteRecord();
      content.save()
      .then(()=> {
        history.back();
      }).catch((err) => {
        console.error(err);
      });
    }
  }
});
