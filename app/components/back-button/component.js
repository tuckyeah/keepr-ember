import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  actions: {
    back() {
      this.sendAction('back');
    }
  }
});
