import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createThing (newThing) {
      let thing = this.get('store').createRecord('thing', newThing);
      thing.save();
    }
  }
});
