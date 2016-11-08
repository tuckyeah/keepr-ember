import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteThing (thing) {
      thing.deleteRecord();
      thing.save();
    },
    showDetails (thing) {
      console.log(thing.id);
      this.get('store').findRecord('category-content', thing.id)
      .then((content) => {
        console.log(content);
        this.transitionTo('category-content', content);
      });
    }
  }
});
