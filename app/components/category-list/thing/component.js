import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['thingCompleted'],

  actions: {
    toggleDone () {
      return this.sendAction('toggleDone', this.get('thing'));
    },
    deleteThing () {
      this.sendAction('deleteThing', this.get('thing'));
    },
    showDetails () {
      this.sendAction('showDetails', this.get('thing'));
    }
  }
});
