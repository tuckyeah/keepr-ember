import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteThing (thing) {
      thing.deleteRecord();
      thing.save();
    }
  }
});
