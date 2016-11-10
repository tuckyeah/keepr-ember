import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  auth: Ember.inject.service(),

  model (params) {
    return this.get('store').findRecord('category', params.category_id);
  },

  actions: {
    deleteThing (thing) {
      thing.deleteRecord();
      thing.save();
      this.refresh();
    },
    edit (category) {
      this.transitionTo('category.edit', category);
    },
    createThing (newThing) {
      let thing = this.get('store').createRecord('thing', newThing);
      return thing.save()
      .then((response)=> {
        let contents = this.get('store').createRecord('category-content', {
          thing: response,
          category: response.category
        });
        return contents.save();
      }).then((response)=> {
        this.transitionTo('category-content', response);
      }).catch((err)=>{
        console.error(err);
        this.get('flashMessages')
        .danger('Something went wrong. Please try again.');
      });
    },
    back() {
      history.back();
    }
  }
});
