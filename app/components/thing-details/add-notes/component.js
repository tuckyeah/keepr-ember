import Ember from 'ember';

export default Ember.Component.extend({
  form: {
    new_comment: null,
  },

  actions: {
    createNote() {
      let form = this.get('form');
      let cat_cont_notes = this.get('content.notes');

      let updated_comment = [cat_cont_notes, form.new_comment].join(':::');

      let cat_cont = this.get('content');
      cat_cont.set('notes', updated_comment);

      this.sendAction('createNote', cat_cont);
      this.set('form.new_comment', null);
    }
  }
});
