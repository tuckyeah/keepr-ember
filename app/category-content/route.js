import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  model (params) {
    return this.get('store').findRecord('category-content', (params.category_content_id));

  },
  actions: {
    createNote(cat_cont) {
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
      })
      .catch((err)=> {
        console.error(err);
        this.get('flashMessages')
        .danger('Something went wrong.');
      });
    },
    deleteContent(content) {
      content.deleteRecord();
      content.save()
      .then(()=> {
        history.back();
      }).catch((err) => {
        console.error(err);
        this.get('flashMessages')
        .danger('Something went wrong.');
      });
    }
  }
});
