import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  actions: {
    delete () {
      this.sendAction('delete', this.get('category'));
    }
  }
});
