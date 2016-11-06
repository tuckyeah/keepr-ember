import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(category) {
      category.save().then(()=> {
        this.transitionTo('category');
      });
    }
  }
});
