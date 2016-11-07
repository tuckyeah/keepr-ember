import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  categories: hasMany('category'),
  contents: hasMany('category-content'),
});
