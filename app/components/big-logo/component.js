import Ember from 'ember';

export default Ember.Component.extend({
  isHidden: false,
  actions: {
    toggleTest() {
      this.toggleProperty('isHidden');
    }
  }
});
