import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  done: DS.attr('boolean'),
  notes: DS.attr('string'),
  category: belongsTo('category')
});
