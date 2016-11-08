import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('category', params.category_id);
  },

  actions: {
    edit (category) {
      this.transitionTo('category.edit', category);
    },
    createThing (newThing) {
      let thing = this.get('store').createRecord('thing', newThing);
      thing.save()
      .then(()=> {
        this.refresh();
      });
    },
    back() {
      history.back();
    }
  }
});
