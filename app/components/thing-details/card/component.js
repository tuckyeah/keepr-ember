import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['itemCompleted'],
  listItemCompleted: Ember.computed.alias('category-content.done')
});
