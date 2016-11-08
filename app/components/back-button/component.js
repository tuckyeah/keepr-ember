import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    back() {
      this.sendAction('back');
    }
  }
});
