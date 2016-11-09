import Ember from 'ember';

export default Ember.Component.extend({
  isBordered: false,
  actions: {
    toggleTest() {
      this.toggleProperty('isBordered');
    }
  }

});
