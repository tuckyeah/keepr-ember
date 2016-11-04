import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  done: DS.attr('boolean'),
  notes: DS.attr('string'),
  category: belongsTo('category', {
    inverse: 'category-contents'
  }),
  thing: belongsTo('thing', {
    inverse: 'category-contents'
  })
});
