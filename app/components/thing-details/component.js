import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createNote (cat_cont) {
      this.sendAction('createNote', cat_cont);
    },
    back() {
      console.log("I ran");
      this.sendAction('back');
    }
  }
});
