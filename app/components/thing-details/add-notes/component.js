import Ember from 'ember';

export default Ember.Component.extend({
  form: {
    new_comment: null,
  },

  actions: {
    createNote() {
      let form = this.get('form');
      let cat_cont_notes = this.get('content.notes');
      let cat_cont = this.get('content');

      if (cat_cont_notes === null) {
        cat_cont.set('notes', form.new_comment);
      } else {
        let updated_comment = [cat_cont_notes, form.new_comment].join(':::');
        cat_cont.set('notes', updated_comment);
      }


      this.sendAction('createNote', cat_cont);
      this.set('form.new_comment', null);
    }
  }
});
