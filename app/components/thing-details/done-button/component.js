import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNameBindings: ['itemCompleted'],
  itemCompleted: Ember.computed.alias('content.done'),
  actions: {
    toggleDone() {
      this.sendAction('toggleDone', this.get('content'));
    }
  }
});
