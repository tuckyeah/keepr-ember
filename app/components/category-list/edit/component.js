import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save () {
      let category = this.get('category');
      category.set('name', category.new_name);
      this.sendAction('save', category);
    }
  }
});
