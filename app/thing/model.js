import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  done: DS.attr('boolean'),
  categories: hasMany('category'),
  contents: hasMany('category-content'),
  content_data: Ember.computed(function() {
    let contents = this.get('store').findRecord('category-content', this.id);
    return contents;
  }),
});
