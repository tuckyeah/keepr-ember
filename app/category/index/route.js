import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteThing (thing) {
      thing.deleteRecord();
      thing.save();
    },
    showDetails (thing) {
      console.log(thing.id);
      this.get('store').query('category-content', {
        filter: {
          thing: thing.id
        }
      }).then((contents)=> {
        let content = contents.get('firstObject');
        this.transitionTo('category-content', content);
      });
    }
  }
});
