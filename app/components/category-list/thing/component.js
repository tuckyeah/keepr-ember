import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    deleteThing () {
      this.sendAction('deleteThing', this.get('thing'));
    }
  }
});
