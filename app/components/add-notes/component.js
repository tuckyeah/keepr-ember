import Ember from 'ember';

export default Ember.Component.extend({
  form: {
    notes: null
  },

  actions: {
    createNote() {
      let notes = this.get('form');
      notes.thing = this.get('thing');
      this.sendAction('createNote', notes);
      this.set('form.notes', null);
    }
  }
});
