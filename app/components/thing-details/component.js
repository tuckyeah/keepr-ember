import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createNote (cat_cont) {
      this.sendAction('createNote', cat_cont);
    },
    toggleDone(content) {
      this.sendAction('toggleDone', content);
    },
    back() {
      this.sendAction('back');
    }
  }
});
