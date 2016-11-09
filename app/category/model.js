import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  user_id: DS.attr('number'),
  things: hasMany('thing'),
  category_contents: hasMany('category-contents')
});
