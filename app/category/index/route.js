import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteThing (thing) {
      thing.deleteRecord();
      thing.save();
    },
    showDetails (thing) {
      console.log(this.get('router.router.state'));
      this.get('store').findRecord('category-content', thing.id)
      .then((content) => {
        this.transitionTo('category-content', content);
      });
    },
    toggleDone(thing) {
      console.log(thing);
      this.get('store').findRecord('category-content', thing.id)
      .then((content)=> {
        console.log(thing);
        console.log(content);
      });
    }
  }
});
