import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createNote (cat_cont) {
      this.sendAction('createNote', cat_cont);
    },
    toggleDone(content) {
      console.log(content);
      this.sendAction('toggleDone', content);
    },
    back() {
      let done_status = this.get('content.done');
      this.sendAction('back', done_status);
    },
    deleteContent() {
      let thing = this.get('content');
      this.sendAction('deleteContent', thing);
    }
  }
});
