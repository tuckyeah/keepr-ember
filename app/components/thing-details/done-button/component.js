import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['itemCompleted'],
  itemCompleted: Ember.computed.alias('content.done'),
  actions: {
    toggleDone() {
      this.sendAction('toggleDone', this.get('content'));
    }
  }
});
