import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';

export default DS.Model.extend(DS.EmbeddedRecordsMixin, {
  name: DS.attr('string'),
  categories: hasMany('category'),
  contents: hasMany('category-content', {embedded: 'always'}),
  content_id: DS.attr('number')
});
